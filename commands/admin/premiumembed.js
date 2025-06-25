const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("generer-premium")
    .setDescription("Crée un embed pour l'activation d'un code premium.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    try {
      // Embed principal
      const embed = new EmbedBuilder()
        .setColor("Gold")
        .setTitle("🔐 Activation Premium")
        .setDescription(
          "Entre ton **code premium** pour débloquer les avantages exclusifs de MicroCoaster !\n\n" +
          "✅ Accès anticipé aux projets\n" +
          "🛠 Support prioritaire\n" +
          "🎁 Fonctionnalités bonus"
        )
        .setFooter({ text: "L'équipe MicroCoaster" })
        .setThumbnail("https://cdn.discordapp.com/emojis/1141097019154522132.png");

      // Bouton pour ouvrir le modal
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("ouvrir_modal_premium")
          .setLabel("Activer mon code")
          .setStyle(ButtonStyle.Primary)
          .setEmoji("🎟️")
      );

      await interaction.reply({ embeds: [embed], components: [row] });

    } catch (error) {
      console.error("[ERREUR generer-premium]", error);
      await interaction.reply({
        content: "Une erreur est survenue lors de la création de l'embed.",
        ephemeral: true,
      });
    }
  },
};
