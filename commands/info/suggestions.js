const {Collection, Client, Discord, Permissions, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'sgt'],
    permission: [],
    description: ' a suggestions command',
    run: async(client, message, Discord, args, premium) => {
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('Please add a suggestions channel');

        let messageArgs = args.join(' ');
        const suggestionEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true }))
        .setDescription(messageArgs);


        channel.send(suggestionEmbed).then((msg) =>{
            msg.react('✅');
            msg.react('❌');
            message.channel.send('**Message sent successfully, please hold while the staff decide your suggestions fate**');
        }).catch((err)=>{
            throw err;
        })
    }
}
