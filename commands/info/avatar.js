const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "info",
  description: "Return A User Avatar!",
  usage: "Avatar | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() //|| message.guild.members.cache.get(args[0]) 
    if(!Member) return message.reply(`Please Mention Someone To Show Hes/Her Avatar !`);

    const Gif = Member.user.displayAvatarURL({ format: "gif" }), Webp = Member.user.displayAvatarURL({ format: "webp" }), Png = Member.user.displayAvatarURL({ format: "png" }), Jpg = Member.user.displayAvatarURL({ format: "jpg" })
    
    if(!Member) return message.reply("please mention someone to Send His Avatar")
    const Embed = new Discord.MessageEmbed()
    .setColor("random")
    .setDescription(`[Png](${Png}) - [Gif](${Gif}) - [Webp](${Webp}) - [Jpg](${Jpg})`)
    .setImage(Member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};