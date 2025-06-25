const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('premiumembed')
    .setDescription('📩 Envoie le message d’entrée du code premium')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#FFD700')
      .setTitle('🎁 Active ton Code Premium')
      .setDescription(`Tu as reçu un **code premium** ? Clique sur le bouton ci-dessous pour l’entrer et débloquer ton rôle !`)
      .setFooter({ text: 'MicroCoaster - Accès Premium' });

    const bouton = new ButtonBuilder()
      .setCustomId('entrer_code_premium')
      .setLabel('🎫 Entrer un code')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(bouton);

    await interaction.reply({ content: '✅ Embed envoyé dans ce salon !', ephemeral: true });
    await interaction.channel.send({ embeds: [embed], components: [row] });
  },
};
