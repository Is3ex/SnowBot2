const {Collection, Client, Discord, Permissions, MessageEmbed} = require('discord.js')

module.exports = {
    name: "8ball",
    description: "ask question and it will answer",
    usage: "<@player>",
    example: "@〖 ❄ I S 3 E X ❄ 〗",
    run: async(client, message, Discord, args, premium) => {
        if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() // create embed 
        .setAuthor('🎱 The 8 Ball says...')
        .setColor('ORANGE').addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};