const Discord = require('discord.js');
const Math = require ("mathjs")
module.exports = {
  name: "kiss",
  description: "kiss someone",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var list = [
      "https://c.tenor.com/hK8IUmweJWAAAAAC/kiss-me-%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E.gif",
      "https://cdn.myanimelist.net/s/common/uploaded_files/1483589017-3fbb8453e1ba6b5e7b63264199d177f5.gif",
      "https://i.gifer.com/2Lmc.gif",
      "https://37.media.tumblr.com/42f96e0adb59440843c94e45650afd19/tumblr_n5mbsq844s1tzpao0o1_500.gif",
      "https://animesher.com/orig/0/67/676/6768/animesher.com_anime-kiss-gif-kiss-676892.gif",
      "https://lh3.googleusercontent.com/proxy/pTLle5JANbCV-u_-11Y_B3t0T2mZbmt2elFQfPotPCHvsgA4rEWPIgqQ2rrOE0SGK995vbXYuLYh-cD3oJx2wFDY",
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    personHugged = message.mentions.users.first()

    if (!personHugged) return message.channel.send("**Please Mention Someone To Slap")


    let hugEmbed = new Discord.MessageEmbed()
    .setTitle(`Kiss`)
    .setDescription(`${message.author} Kiss ${personHugged}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({format: "png"}))
    .setFooter("Snow Bot (Soon)")
    message.channel.send(hugEmbed)
  }
}      