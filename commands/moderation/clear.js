module.exports = {
    name : 'clear',
    aliases : ['purge'],
    run : async(client, message, Discord, args, premium) => {

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("hey! you dont Have the Right permissions")
        if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
        if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
        if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages that I can delete is 99')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send('Deleted ' + args[0]  + " messages.")            .then((msg) => {
            setTimeout(() => msg.delete(), 5000);
            
            })
    }
}