const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "dm",
  description: "messages a player the message u send",
  usage: "@player 'message'",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, Discord, args) => {
    
      const Target = message.mentions.members.first()
      //const everyone = message.mentions.everyone
      if(!message.member.hasPermission("ADMINISTRATOR")){
        message.reply(' you Dont have the Correct permissions')
        return
    }

      const DM = args.join(" ").slice(22)
    const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(DM)
        .setTimestamp()
        .setColor("RANDOM")

    Target.send(sayEmbed).then( setTimeout(() => message.delete(), 3000))
    //everyone.send(sayEmbed).then( setTimeout(() => message.delete(), 3000));
  },
};