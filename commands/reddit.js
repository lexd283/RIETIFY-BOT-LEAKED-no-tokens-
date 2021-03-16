const Discord = require('discord.js');
const api = require("imageapi.js"); 


 module.exports.run = async (bot, message, args) =>{
 let subreddits = [
      "memes"
    ];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`random meme from r/memes`)
    .setURL(`https://www.reddit.com/r/memes`)
    .setColor('RANDOM')
    .setImage(img)
    .setFooter(`lol funny meme lol`)
    message.channel.send(Embed)
  }

module.exports.help ={
    name: "meme",
    aliases: []
}
