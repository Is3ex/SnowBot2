const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
        name: 'lock',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    run: async (bot, message, args) => {

    let channeltolock = message.mentions.channels.first()  //message.guild.channels.cache.get(args[1])

    if(!channeltolock) return message.reply(`Please Mention A Channel To Lock !`);

let everyone = message.guild.roles.cache.get(message.guild.id)

channeltolock.updateOverwrite(everyone, {
    SEND_MESSAGES: false
    
  },[`REPONSIBLE MODERATOR | ${message.author.tag}`])
    .then(message.reply(`Locked Channel ${channeltolock} ! `))
    .catch(console.error);
    }
}    