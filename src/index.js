const { Client , Intents } = require('discord.js')
const CommandingJS = require('commanding.js')
const config = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready' , () => {
    console.log("Ready!");

    new CommandingJS(client , 'commands' , 'listeners')
        // .setDefaultPrefix('!')
        .setMongoPath(config.mongo_uri)
        .setSyntaxError("Nah this ain't gonna work! {PREFIX}{COMMAND} {ARGUMENTS}")
})

client.login(config.token)