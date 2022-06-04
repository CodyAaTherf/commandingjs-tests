const { Client , Intents } = require('discord.js')
const CommandingJS = require('commanding.js')
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready' , () => {
    console.log("Ready!");

    new CommandingJS(client)
        // .setDefaultPrefix('!')
})

client.login(token)