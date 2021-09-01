const Discord = require('discord.js');
const Math = require ("mathjs")
module.exports = {
  name: "slap",
  description: "just slap someone",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var list = [
      "https://c.tenor.com/AzIExqZBjNoAAAAC/anime-slap.gif",
      "https://media2.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif?cid=ecf05e477106e2fc0d1ed0906595b65067262ab482a12b5d&rid=giphy.gif",
      "https://i.imgur.com/DVft5D6.gif",
      "https://c.tenor.com/UDo0WPttiRsAAAAS/bunny-girl-slap.gif",
      "https://i.pinimg.com/originals/6a/60/d1/6a60d1eaf8c7317f7dfb0a892789c490.gif",
      "https://i.pinimg.com/originals/32/6e/9f/326e9fc4ac0913eac14ecbf6f2160a8c.gif",
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    personHugged = message.mentions.users.first()

    if (!personHugged) return message.channel.send("**Please Mention Someone To Slap")


    let hugEmbed = new Discord.MessageEmbed()
    .setTitle(`Slap`)
    .setDescription(`${message.author} Slap ${personHugged}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({format: "png"}))
    .setFooter("Snow Bot (Soon)")
    message.channel.send(hugEmbed)
  }
}      