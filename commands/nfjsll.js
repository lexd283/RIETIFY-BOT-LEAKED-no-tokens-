const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        const sayEmbed = new MessageEmbed()
            .setAuthor('|  New Flight','https://cdn.discordapp.com/emojis/819981575797080129.png?v=1')
            .setDescription(args.join(" "))
            .setTimestamp()
            .setColor("#111110")
            .setImage('https://media.discordapp.net/attachments/798303886150074420/819989838798258186/unknown.png?width=747&height=394')
            message.delete()
        message.channel.send('@here', sayEmbed)
    }}

module.exports.help ={
    name: "nfjsll",
    aliases: ["nfjs"]
    
}