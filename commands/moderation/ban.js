const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "bans a user",
  usage: "<@player> <reason>",
  example: "@crazy  being too nice",
  run: async(client, message, Discord, args, premium) => {
  
    const bPlayer = message.mentions.members.first();
    const bReason = args.join(" ").slice(22);
    

    const banEmbed3 = new MessageEmbed()
    .setTitle("Hello you have been banned")
    .setColor("RANDOM")
    .addField('Guild', `${message.guild}`, true)
    .addField('banned_by', `${message.author.toString()}`, true)
    .setDescription(`reason: ${bReason}`)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))


    if(message.member.permissions.has("ADMINISTRATOR"))  {
      if(!bPlayer) return message.reply("please mention someone to ban")//, message.channel.send("example: !ban @crazy pump example") 


    if(!bReason) return  message.reply("please type a reson")//, message.channel.send("example: !ban @crazy pump example") 

    


    bPlayer.ban({ days: 7, reason:bReason })

    bPlayer.send(banEmbed3)



    }else{message.reply("I am Sorry But you Dont have The correct Perms!")}
  }
  }
