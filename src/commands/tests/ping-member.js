// min max args
// role perm

module.exports = {
    name: 'ping-member' ,
    commands: ['ping-member' , 'pingmember' , 'pm'] ,
    description: 'Bot pings the member you ping' ,
    syntaxError: 'wrong symtax! use {PREFIX}{COMMAND} <@mention>' ,
    minArgs: 1 ,
    maxArgs: 1 ,
    callback: (message) => {
        const { mentions } = message
        const target = mentions.users.first()

        if(target){
            message.channel.send(`Hello , ${target} !`)
        }
    }
}