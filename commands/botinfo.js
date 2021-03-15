const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const BotinfoEmbed = new Discord.MessageEmbed()
    .setColor(0x236edf)
    .setTitle('rietify cool bot info')
    .setDescription('im cool')
    .addField('total servers' , bot.guilds.cache.size + ' servers' )
    .addField('total members' , bot.users.cache.size + ' members' )
    .addField('uptime' , bot.uptime + ' milliseconds')
    .addField('developers' , ' big bus man#8780 and Fentanyl#6557')
    .addField('if being sexy law i am arrest', 'bruh')
    .addField('bot owner if needed', '<@563687847232536591>')
    .setThumbnail('https://media.discordapp.net/attachments/790614175113019443/797651546409926686/awe3.png?width=351&height=344')

    message.channel.send(BotinfoEmbed)


}

module.exports.help ={
    name: "botinfo",
    aliases: []
}
