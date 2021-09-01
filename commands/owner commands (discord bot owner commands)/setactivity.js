const { stat } = require("fs");

module.exports = {
    name: "setstatus",
    description: "set The bot,s Status",
    usage: "<Status>",
    run: (client, message, Discord, args, premium) => {
       const owner = ['773841302710255616',
    '843477843304251463']
       const status = args.join(" ").slice();

       if(!owner.includes(message.author.id)) return message.reply("only the owner can do this!")


      // if(message.author.id !==owner) return message.reply("only the owner can do this!")

       if(!status) return message.reply("type a status")

       client.user.setActivity(status).then(message.reply("set the Status"))
    }
}