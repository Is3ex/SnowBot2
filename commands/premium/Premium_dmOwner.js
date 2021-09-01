const { Client, Message, MessageEmbed, } = require("discord.js");

module.exports = {
    name: "dmowner",
    description: "dm the owner",
    usage: "<message>",
    run: async(client, message, Discord, args, premium) => {
        //const premium = ['843477843304251463',]//
        const owner = client.users.cache.get('773841302710255616','843477843304251463')

        if(!premium.includes(message.author.id)) return message.reply("This is a Premium Feature")

        if(!args.join(" ")) return message.reply("please send the message")

        const messageS = args.join(" ")

        const Embed = new MessageEmbed()
        .setTitle("new DM")
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .addField('User', `${message.author.tag}`, true)
        .addField('message', messageS)
        .setTimestamp("")

        owner.send(Embed)
    }
}