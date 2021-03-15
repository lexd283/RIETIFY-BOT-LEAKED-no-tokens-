module.exports.run = async (bot, message, args) =>{

    const m = await message.reply("Ping?");
    m.edit(`Pong. ${m.createdTimestamp - message.createdTimestamp}ms`);


}

module.exports.help ={
    name: "ping",
    aliases: ["p"]
}
