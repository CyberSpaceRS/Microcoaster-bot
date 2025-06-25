const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  customId: "entrer_code_premium",

  /**
   * Gère le clic sur le bouton "Entrer un code"
   * @param {import("discord.js").Interaction} interaction
   */
  async execute(interaction) {
    if (!interaction.isButton()) return;

    const modal = new ModalBuilder()
      .setCustomId("valider_code_premium")
      .setTitle("🎫 Entrer un code premium");

    const codeInput = new TextInputBuilder()
      .setCustomId("code_premium")
      .setLabel("Code Premium")
      .setStyle(TextInputStyle.Short)
      .setPlaceholder("Ex: MICROCOASTER-2024")
      .setRequired(true);

    const firstActionRow = new ActionRowBuilder().addComponents(codeInput);
    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
  },
};
