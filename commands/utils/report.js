const { Client, Message, MessageEmbed, } = require("discord.js");

module.exports = {
    name: "report",
    description: "report a bug",
    usage: "<bug>",
    arguments: true,

      /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

    run: async(client, message, Discord, args, premium) => {
        const owner = client.users.cache.get('773841302710255616');


        const bug = args.join(" ");
        if(!bug) return message.reply("please type a bug")

        const bugEmbed = new MessageEmbed()
        .setTitle("New BUG!")
        .setColor("RANDOM")
        .setAuthor(`${message.author.username}`)
        .addField('Author', message.author.toString(), true)
        .addField('Guild', `${message.guild}`, true)
        .addField('Bug', bug)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()



        if(!bug) return message.reply("please type a bug")

        owner.send(bugEmbed)
    }
}