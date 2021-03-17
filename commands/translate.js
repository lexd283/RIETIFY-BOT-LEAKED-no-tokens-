  
const translate = require('translate-google')

module.exports.run = async (bot, message, args) =>{


translate(args.join(" "), {to : 'en'}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.channel.send('An error has occured')
            console.log(err)
        })
  
}

module.exports.help ={
    name: "translate",
    aliases: []
}
