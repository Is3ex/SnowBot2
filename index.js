const {Collection, Client, Discord, Permissions, MessageEmbed} = require('discord.js')

const {token, default_prefix} = require("./config.json")

const discord = require('discord.js')

//const MessageEmbed = require('discord.js')
 
const Canvas = require("canvas")
const db = require('quick.db');

const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

const fs = require('fs')
const permissionsList = ['ADMINISTRATOR',]

const client = new Client({
  disableEveryone: true
})
//setautorole//
//client.on("guildMemberAdd", async (member) => {
//  let set_autorole = db.get(`unknown_autorole_${message.guild.id}`);
//  if (unknown_autorole ===  null) return;
 // member.roles.add(unknown_autorole)
//})


const premium = ['773841302710255616','843477843304251463',]


const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

const botPerms = ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'MANAGE_ROLES', 'MANAGE_CHANNELS'];


const config = require('./config.json')
//const adminrole = guild.roles.cache.find(r => r.name === 'Admin')
//const prefix = config.prefix
//const token = config.token

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${default_prefix}help`)
    client.user.setStatus('dnd')
    client.user.bot
    console.log('▒██▄░▒█▌▒▐█▀▀█▌▒█░░░▄░░▒█       ▐█▀▀█▌▒██▄░▒█▌▒██░░░░▐██▒██▄░▒█▌░▐█▀▀')
    console.log('▒▐█▒█▒█░▒▐█▄▒█▌▒█░░▒█░░▒█      ▒▐█▄▒█▌▒▐█▒█▒█░▒██░░░─░█▌▒▐█▒█▒█░░▐█▀▀')
    console.log('▒██░▒██▌▒▐██▄█▌░▒▀▄▀▒▀▄▀░      ▒▐██▄█▌▒██░▒██▌▒██▄▄█░▐██▒██░▒██▌░▐█▄▄')
    console.log(`${client.user.username} ✅`)
    console.log('  _     _       _           _                                               _                                 _                                    _                     _               _   ');
    console.log("| __| | '_ \  | | / __|   | | / __|    / _` |   | '__|  / _ \  / _` |  / _` | | | | |    / _` | | '_ \   / _` |   | '__| | | | | | '_ \  | '_ \  | | | '_ \   / _` |   | '_ \   / _ \  | __|");
    console.log(" | |_  | | | | | | \__ \   | | \__ \   | (_| |   | |    |  __/ | (_| | | (_| | | |_| |   | (_| | | | | | | (_| |   | |    | |_| | | | | | | | | | | | | | | | | (_| |   | |_) | | (_) | | |_ ")
    console.log("  \__| |_| |_| |_| |___/   |_| |___/    \__,_|   |_|     \___|  \__,_|  \__,_|  \__, |    \__,_| |_| |_|  \__,_|   |_|     \__,_| |_| |_| |_| |_| |_| |_| |_|  \__, |   |_.__/   \___/   \__|")
    console.log("                                                                                |___/                                                                          |___/                         ")
    console.log("┌───── •✧✧• ─────┐")
    console.log(" -  WE ARE ON AIR - ")
    console.log("└───── •✧✧• ─────┘")
})
//const canvas = require("canvas")

/*client.on("message", async message => {
  if(!message.guild) return;
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    
    if(!message.content.startsWith(prefix)) return;
    
    //YOUR CODE
  })*/
// let y = process.openStdin()
// y.addListener("", res => {
//     const x = message.content.slice(prefix.length).trim().split(/ +/g);
//     console.catch(errorNot).client.channels.get('840234504475770900').send(errorNot)
// })


/*Client.on("guildMemberAdd", async (member) => {


  let background;
  let backgrounds = db.fetch(`background_${member.guild.id}`)
  if(backgrounds == null) {
      background = 'https://cdn.discordapp.com/attachments/819284150791176232/825290048659914782/abstract-dotted-banner-background_1035-18160.png'
  } else {
      background = backgrounds
  }
  const avatar = member.user.displayAvatarURL({dynamic: false})
  const title = member.user.username
  const Member12 = member.guild.memberCount
  const sub = `Member ${Member12}`
  const color = 'FFFFFF'
  const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/welcomebanner?background=${background}&avatar=${avatar}&title=${title}&subtitle=${sub}&textcolor=${color}`, {

});
  const welcomechannel = db.fetch(`welcomeChannel_${member.guild.id}`)
  if(welcomechannel == null) {
      return
  } else {
      const Wchannel =  member.guild.channels.cache.get(welcomechannel)
      let Image = await res.buffer()
      const WImage = new Discord.MessageAttachment(Image)
      Wchannel.send(`Welcome to the server ${member}`, WImage)
  }

})*/

client.on('message', async message =>{
  if(message.author.bot) return;
  if(!message.content.startsWith(default_prefix)) return;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(default_prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0 ) return;    
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, Discord, args, premium)
  if(command) console.log(`${command.name} was used by ${message.author.username}`)

  if(!command) return message.reply("sorry cant find that command");
})


 //client.on('guildMemberAdd', guildMember =>{
//
  //   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'members');
   //  const ch = message.guild.channels.cache.find(ch => ch.name === `welcome`)
   //  if(!welcomeRole) {
   //  guild.roles.cache.create('members')}
   //  if(!guild.channels.cache.find(ch => ch.name === `welcome`)) {
   //  guild.channels.create(`welcome`, {
   //     type : 'text',
    //    permissionOverwrites : [
   //          {
    //             id : message.guild.id,
   //             deny : ['SEND_MESSAGES']
   //          },
//
   //       
  //       ]
 //    })  
 //   }
//
 //    guildMember.roles.add(welcomeRole);
 //    guildMember.guild.channels.cache.get(ch).send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
 //});

 /*client.on('guildMemberAdd', async member => {
	let chx = db.get(`welchannel_${member.guild.id}`);

    const Canvas = require('canvas')

var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fillStyle = '#ffffff';

Canvas.loadImage("./img/3308634.png").then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
    welcomeCanvas.context.fillText("welcome", 360, 360);
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke()
    welcomeCanvas.context.fill()
})


require('ultrax').inviteLogger(Client)
require('discord-buttons')(Client)


Client.on('guildMemberAdd', async member => {
    const welcomechannel = Client.channels.cache.get(`welchannel_${member.guild.id}`)
    let canvas = welcomeCanvas;
    canvas.context.font = '42px sans-serif',
    canvas.context.textAlign = 'center';
    canvas.context.fillText(member.user.tag.toUpperCase(), 512, 410)
    canvas.context.font = '32px sans serif'
    canvas.context.fillText(`You are the ${member.guild.memberCount}th`, 512, 455)
    canvas.context.beginPath()
    canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
    canvas.context.closePath()
    canvas.context.clip()
    await Canvas.loadImage(member.user.displayAvatarURL({format: 'png', size: 1024}))
    .then(img => {
        canvas.context.drawImage(img, 393, 47, 238, 238);
    })
    let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
    try {
        welcomechannel.send(`:wave: Hello ${member}, welcome to ${member.guild.name}!`, atta)
    } catch (error) {
        console.log(error)
    }
})*/
 
//channel#send(image)
   


/*
  client.channels.cache.get(chx).send("Welcome to our Server " + member.user.username, attachment);
})*/

client.login(config.token)