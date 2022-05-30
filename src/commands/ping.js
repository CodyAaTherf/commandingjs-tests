module.exports = {
    name: 'ping' ,
    commands: ['p'] , // or aliases: ['p'] . either works
    description: 'Ping' ,
    callback: (message) => {
      message.reply('Pong!')
    }
}