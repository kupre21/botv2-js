const Discord = require('discord.js');

module.exports = {
    name: 'help',
    descriptions: 'help commands',
    execute(message) {
        const Embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setColor('RANDOM')
            .addFields({
                name: 'Moderation',
                value: 'kick, ban, mute, unmute, lock, unlock, warn',
                inline: true
            }, {
                name: 'Fun',
                value: 'say',
                inline: true
            })
            .setTimestamp()
        message.channel.send(Embed);
    }
}