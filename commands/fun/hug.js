const Discord = require('discord.js');
const Math = require ("mathjs")
module.exports = {
  name: "hug",
  description: "just hug someone",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var list = [
      "https://i.pinimg.com/originals/e2/c9/7a/e2c97a3b7a1ac0ec5bcecc0c18c61209.gif",
      "https://64.media.tumblr.com/2be3818398fa62f2aff108e8f73618bb/tumblr_nvrggbVi5I1rw7ngmo1_500.gifv",
      "https://i.imgur.com/xJlQaNK.gif",
      "https://c.tenor.com/FYKsVaNI7lkAAAAC/anime-hug.gif",
      "https://i.pinimg.com/originals/bb/84/1f/bb841fad2c0e549c38d8ae15f4ef1209.gif",
      "https://gifimage.net/wp-content/uploads/2017/09/anime-girl-hug-gif-12.gif",
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    personHugged = message.mentions.users.first()

    if (!personHugged) return message.channel.send("**Please Mention Someone To Slap")


    let hugEmbed = new Discord.MessageEmbed()
    .setTitle(`hug`)
    .setDescription(`${message.author} hug ${personHugged}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({format: "png"}))
    .setFooter("Snow Bot (Soon)")
    message.channel.send(hugEmbed)
  }
}      