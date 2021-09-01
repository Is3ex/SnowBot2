const {Collection, Client, Discord, Permissions, MessageEmbed} = require('discord.js')

module.exports = {
    name: "announce",
    description: "announce a message",
    usage: "<#channel> <message>",
    run: async(client, message, Discord, args, premium) => {

        if(!message.member.hasPermission("ADMINISTRATOR")){
            message.reply(' you Dont have the Correct permissions')
            return
        }

        const everyone = message.guild.roles.cache.find(role => role.name === 'everyone')
   
        const MC = message.mentions.channels.first()
        const DarkEmbed = new MessageEmbed()
        .setTitle("announcement")
        .setColor("RANDOM")
        .addField('channel:', MC, true)
        .addField('message:', ` ${args.join(" ").slice(22)}`, true)
        .setTimestamp("")
        
        MC.send(DarkEmbed)





    }
}