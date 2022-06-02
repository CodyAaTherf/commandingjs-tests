// min max args
// role perm

module.exports = {
    name: 'ping-member' ,
    commands: ['ping-member' , 'pingmember' , 'pm'] ,
    description: 'Bot pings the member you ping' ,
    callback: (message) => {
        message.reply(`Hello !`)
    }
}