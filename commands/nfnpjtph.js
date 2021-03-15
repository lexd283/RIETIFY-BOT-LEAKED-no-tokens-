const { Client, Message, MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        const sayEmbed = new MessageEmbed()
            .setAuthor('|  New Flight','https://cdn.discordapp.com/emojis/819981575797080129.png?v=1')
            .setDescription(args.join(" "))
            .setTimestamp()
            .setColor("#111110")
            .setImage('https://images-ext-1.discordapp.net/external/cSJpHa_v0mFV6qTm4fBqFQZleA0ie0myZyvspo_YtFU/%3Fwidth%3D905%26height%3D472/https/media.discordapp.net/attachments/593969303683072021/757004629258141778/RobloxScreenShot20200919_182525392.png?width=814&height=425')
            message.delete()
        message.channel.send(sayEmbed)
    }}

module.exports.help ={
    name: "npjtph",
    aliases: ["npjt"]
    
}