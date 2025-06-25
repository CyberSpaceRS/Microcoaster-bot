const db = require("../../db");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  customId: "valider_code_premium",

  /**
   * Gère la soumission du modal d'entrée de code premium
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return;

    const codeEntré = interaction.fields.getTextInputValue("code_premium").trim();
    const roleId = "1382696749298356245"; // ID du rôle Premium

    try {
      const [rows] = await db.promisePool.query(
        "SELECT * FROM codes_premium WHERE code = ? AND utilisé = FALSE",
        [codeEntré]
      );

      if (rows.length === 0) {
        return interaction.reply({
          content: "❌ Ce code est invalide ou a déjà été utilisé.",
          ephemeral: true,
        });
      }

      // Mise à jour du code comme utilisé
      await db.promisePool.query(
        `UPDATE codes_premium SET utilisé = TRUE, id_utilisateur = ?, date_utilisation = NOW() WHERE code = ?`,
        [interaction.user.id, codeEntré]
      );

      // Enregistrement ou mise à jour de l'utilisateur
      await db.promisePool.query(
        `INSERT INTO utilisateurs (id_discord, username, premium, date_premium)
         VALUES (?, ?, TRUE, NOW())
         ON DUPLICATE KEY UPDATE premium = TRUE, date_premium = NOW(), username = VALUES(username)`,
        [interaction.user.id, interaction.user.username]
      );

      // Attribution du rôle
      const member = await interaction.guild.members.fetch(interaction.user.id);
      const role = interaction.guild.roles.cache.get(roleId);
      if (role) await member.roles.add(role).catch(console.error);

      const embed = new EmbedBuilder()
        .setTitle("✨ Premium activé avec succès !")
        .setDescription("Tu as maintenant accès aux fonctionnalités exclusives du serveur 🎉")
        .setColor("Gold");

      return interaction.reply({ embeds: [embed], ephemeral: true });

    } catch (err) {
      console.error("[ERREUR Code Premium]", err);
      return interaction.reply({
        content: "❌ Une erreur est survenue pendant la validation du code.",
        ephemeral: true,
      });
    }
  },
};
