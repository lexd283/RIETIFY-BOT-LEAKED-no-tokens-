const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic: true, size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        .setFooter('woah that is a cool avatar 😳')

        message.reply(embed);
}
module.exports.help ={
    name: "avatar",
    aliases: ["av"]   
}