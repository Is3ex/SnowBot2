const {Client, message, MessageEmbed} = require('discord.js')

module.exports = {
    name: "nuke",
    description: "clear all messages in channel",
    usage: " ",
    example: " ",
    run: async(client, message, Discord, args, premium) => {
        if(!message.member.hasPermission("ADMINISTRATOR")){
            message.reply(' you Dont have the Correct permissions')
            return
        }
        if(message.member.hasPermission('ADMINSTRATOR')){
            message.channel.delete(`Nuked by ${message.author.tag}`)
            message.channel.clone().then(channel => {
                const NukeEmbed = new MessageEmbed()
                .setAuthor(`Nuked by ${message.author.tag}`, message.author.displayAvatarURL())
                .setDescription(`Nuked this channel`)
                channel.send(NukeEmbed)
            })    
        }
    }
}            