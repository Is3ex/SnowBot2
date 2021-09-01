const {Collection, Client, Discord, Permissions, MessageEmbed} = require('discord.js')

module.exports = {
    name: "gay",
    description: "how gay is someone?",
    usage: "<@player>",
    example: "@you",
    run: async(client, message, Discord, args, premium) => {

        const Target = message.mentions.members.first()

        if(!Target) return message.channel.send(`${message.author} you need to mention someone`)

        const GAII = Math.floor(Math.random() * (100 - 1) + 1);

        message.channel.send(`${Target} is Gay ${GAII}% lmao`)

        const Embed = new MessageEmbed()
        .setTitle("GAY?")
        .setColor("RANDOM")
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .addField('Gay testet by:', message.author, true)
        .addField('GAHOO!', `you are ${GAII}% GAY`, true)

        Target.send(Embed)
        
    }
}