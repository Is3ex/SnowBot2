const Discord = require("discord.js")

module.exports = {
    name: "mute",
    aliases : ['stoptalk'],
    run : async(client, message, args, premium) => {
        const adminrole = message.guild.roles.cache.find(r => r.name === 'Admin')
        const mutedrole = message.guild.roles.cache.find(r => r.name === 'Muted')
        if(!adminrole) return message.guild.roles.create({
            data:{
                name: "Admin",
                permissions: "ADMINISTRATOR"
            }
        })

        if(!mutedrole) return message.reply("we have to create the muted role").then(
            message.guild.roles.create({
                data:{
                    name: "Muted",
                    
                }
            }).then( message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                await channel.createOverwrite(message.guild.roles.cache.find(r => r.name === 'Muted'), {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            
            })))
            // message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            //     await channel.createOverwrite(message.guild.roles.cache.find(r => r.name === 'Muted'), {
            //         SEND_MESSAGES: false,
            //         ADD_REACTIONS: false
            //     })
            
            // }));


        if(adminrole) {
            const target = message.mentions.members.first();
            
            if(!target) message.reply("`please specify someone to mute`")

            if(target) {
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle("MUTED")
                    .setColor("RANDOM")
                    .setDescription(`muted by ${message.author.tag}`)
                ).then(
                   target.roles.add(mutedrole)
                )
            }
        }


    }
}