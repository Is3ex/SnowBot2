const { Client, Message } = require('discord.js')

module.exports = {
    name : 'ticket',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        
        const trans = message.guild.channels.cache.find(category => category.name === "Transcripts")

       const cat = message.guild.channels.cache.find(category => category.name === "Tickets")

       if(!cat) {
           message.guild.channels.create("Tickets", {
               type: "category",
               permissionOverwrites : [
               {
                id : message.guild.id,
                deny : ['VIEW_CHANNEL']
            }
        ]
           })
            return message.reply("we had to create a place to store tickets, use !ticket again")
       }
      


        const ch = message.guild.channels.cache.find(ch => ch.name === `Ticket ${message.author.id}`)
        if(ch) return message.channel.send('You already have a ticket open.')


         message.guild.channels.create(`Ticket ${message.author.id}`, {
            type : 'text',
            parent: message.guild.channels.cache.find(category => category.name === "Tickets"),
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
        ]
        }).then(async channel=> {
            message.reply(`click <#${channel.id}> to view your ticket`).then(msg => {
                setTimeout(() => msg.delete(), 3000)}
           
            );


            channel.send(`${message.author}, welcome to your ticket!`)
        })
        }
}