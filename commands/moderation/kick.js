const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  description: "kicks a user",
  usage: "<@player> <reason>",
  example: "@crazy pump being too nice",
  run:(client, message, Discord, args, premium) => {
    const bPlayer = message.mentions.members.first();
    const bReason = args.join(" ").slice(22);
    

    const banEmbed3 = new MessageEmbed()
    .setTitle("Hello you have been kicked")
    .setColor("RANDOM")
    .addField('Guild', `${message.guild}`, true)
    .addField('banned_by', `${message.author.toString()}`, true)
    .setDescription(`reason: ${bReason}`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))


    if(message.member.permissions.has("ADMINISTRATOR"))  {
      if(!bPlayer) return message.reply("please mention someone to kick")//, message.channel.send("example: !ban @crazy pump example") 


    if(!bReason) return  message.reply("please type a reson")//, message.channel.send("example: !ban @crazy pump example") 

    


    bPlayer.kick({ days: 7, reason:bReason })

    bPlayer.send(banEmbed3)



    }else{message.reply("I am Sorry But you Dont have The correct Perms!")}
  }
  }
