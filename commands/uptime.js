module.exports.run = async (bot, message, args) =>{

    const m = await message.reply("Calculating uptime...");
    m.edit(bot.uptime `milliseconds`);


}

module.exports.help ={
    name: "uptime",
    aliases: []
}
