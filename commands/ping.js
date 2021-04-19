const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    desscription: 'shows ping',
    execute(message, client) {
        const Embed = new Discord.MessageEmbed()
            .setTitle('Ping')
            .addFields({
                name: 'Ping',
                value: `current bot ping is ${Math.round(client.ws.ping)}`
            })
            .setColor('RANDOM')
            .setTimestamp()
        message.channel.send(Embed);
    }
}