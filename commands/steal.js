const { Client, Message, Util } = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(message.member.hasPermission('ADMINISTRATOR')) {
  if (!args.length) return message.reply("please specify an emoji bruh <:kekw:805776330863149076>");

  for (const rawEmoji of args) {
    const fart = Util.parseEmoji(rawEmoji);
    if (fart.id) {
//.gif //.png
const extension = fart.animated ? ".gif" : ".png";
const url = `https://cdn.discordapp.com/emojis/${fart.id + extension}`;
message.guild.emojis.create(url, fart.name)
.then((emoji) => message.reply(`yo mama!!!!!! jk i added: \`${emoji.url}\``))
    }
  }
  }}
module.exports.help ={
    name: "steal",
    aliases: []
    
}