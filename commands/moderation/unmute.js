const Discord = require("discord.js")

module.exports = {
    name: "unmute",
    aliases : ['removesmute'],
    run : async(client, message, args, premium) => {
        const adminrole = message.guild.roles.cache.find(r => r.name === 'Admin')
        const unmutedrole = message.guild.roles.cache.find(r => r.name === 'members')
        const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if(!adminrole) return message.guild.roles.create({
            data:{
                name: "Admin",
                permissions: "ADMINISTRATOR"
            }
        })

        if(!unmutedrole) return message.reply("we have to create the members role").then(
            message.guild.roles.create({
                data:{
                    name: "members",
                    
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
            
            if(!target) message.reply("`please specify someone to unmute`")

            if(target) {
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setTitle("Unmuted")
                    .setColor("RANDOM")
                    .setDescription(`unmuted by ${message.author.tag}`)
                ).then(
                   target.roles.remove(muteRole)

                ).then(
                    target.roles.add(unmutedrole)
                )
            }
        }


    }
}