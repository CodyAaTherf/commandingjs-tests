module.exports = {
    name: 'ping' ,
    commands: ['p'] , // or aliases: ['p'] . either works
    description: 'Ping' ,
    requiredPermissions: ['ADMINISTRATOR'] ,
    callback: (message) => {
      message.reply('Pong!')
    }
}