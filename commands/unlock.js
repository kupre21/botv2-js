const Discord = require('discord.js');

module.exports = {
    name: 'unlock',
    description: 'unlocks',
    execute(message) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You don\'t have permission to unlock channel'); 
        let channel = message.channel;

        channel.overwritePermissions([
            {
                id: channel.guild.roles.everyone,
                allow: ['SEND_MESSAGES', 'ADD_REACTIONS'],
            },
        ], 'SECURITY REASONS');

        message.channel.send(`${channel} is unlocked!`);
    }
}