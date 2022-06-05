module.exports = (client) => {
    client.on('message' , (message) => {
        console.log(message.content);
    })
}

module.exports.features = {
    name: 'logger'
}