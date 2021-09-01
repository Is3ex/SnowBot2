
const { Message, Client, MessageAttachment} = require('discord.js')
const fs = require('fs')

module.exports = {
    name : 'close',
    description: "close a ticket",
    permissions: 'ADMINISTRATOR',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {

        if(message.member.permissions.has("ADMINISTRATOR")) {

  
        const trans = message.guild.channels.cache.find(category => category.name === "Transcripts")

        const cat = message.guild.channels.cache.find(category => category.name === "Tickets")

        const ch = message.guild.channels.cache.find(ch => ch.name === `Ticket ${message.author.id}`)




        
         //if(!) return message.channel.send('You can only use this command in a ticket!');

         if(!trans) {
            message.guild.channels.create("Transcripts", {
                type: "category",
                permissionOverwrites : [
                {
                 id : message.guild.id,
                 deny : ['VIEW_CHANNEL']
             }
         ]
            })
             return message.reply("we had to create a place to store tickets, use !close again")
        }
        const transcriptChannel = message.guild.channels.cache.get(trans)
        message.channel.send('Deleting ticket in 5 seconds.....')
        setTimeout(() => {
            message.channel.setParent(cat)
                , 10});

                setTimeout(() => {
                    message.channel.setParent(trans)
                        message.channel.updateOverwrite(message.author, { SEND_MESSAGES: false, VIEW_CHANNEL: false })
                        message.channel.setName(`closed Ticket ${message.author.id}`), 5000})
                        
}else {message.reply("you Dont have the Correct permissions")}
    }
                
            };

