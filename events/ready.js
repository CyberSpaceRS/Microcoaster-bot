/**
 * Gestionnaire de l'événement "ready" pour le bot MicroCoaster.
 *
 * Ce module est déclenché une seule fois lorsque le bot est prêt.
 * Il affiche un message stylisé et lance les tâches planifiées.
 */

module.exports = {
  name: "ready",
  once: true,
  /**
   * Méthode exécutée lors du déclenchement de l'événement "ready".
   *
   * @param {Client} client - L'instance du bot Discord.
   */
  async execute(client) {
    console.log(`
\x1b[38;2;255;100;0mooo        ooooo  o8o                                     .oooooo.                                    .                      
\x1b[38;2;255;120;0m\`88.       .888'  \`"'                                    d8P'  \`Y8b                                 .o8                      
\x1b[38;2;255;140;0m 888b     d'888  oooo   .ooooo.  oooo d8b  .ooooo.      888           .ooooo.   .oooo.    .oooo.o .o888oo  .ooooo.  oooo d8b 
\x1b[38;2;255;160;0m 8 Y88. .P  888  \`888  d88' \`"Y8 \`888""8P d88' \`88b     888          d88' \`88b \`P  )88b  d88(  "8   888   d88' \`88b \`888""8P 
\x1b[38;2;255;180;0m 8  \`888'   888   888  888        888     888   888     888          888   888  .oP"888  \`"Y88b.    888   888ooo888  888     
\x1b[38;2;255;200;0m 8    Y     888   888  888   .o8  888     888   888     \`88b    ooo  888   888 d8(  888  o.  )88b   888 . 888    .o  888     
\x1b[38;2;255;220;0mo8o        o888o o888o \`Y8bod8P' d888b    \`Y8bod8P'      \`Y8bood8P'  \`Y8bod8P' \`Y888""8o 8""888P'   "888" \`Y8bod8P' d888b\x1b[0m






      🎢 MicroCoaster Discord Bot prêt !
      🔗 https://github.com/CyberSpaceRS/Microcoaster-bot
    `);

    console.log(
      `\x1b[0m✅  Connecté en tant que \x1b[38;5;45m${client.user.tag}\x1b[0m (\x1b[38;5;45m${client.user.id}\x1b[0m)`,
    );

  },
};
