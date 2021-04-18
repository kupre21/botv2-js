const Discord = require('discord.js');


module.exports = {
    name: 'kick',
    description: 'kick',
    execute(message, client) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You dont have permissions for that');
            return;
        }

        let mentionmember = message.mentions.members.first();

        if (!mentionmember) {
            message.channel.send('Please mention the member that you want to kick');
            return;
        }

        let authorhighestrank = message.guild.roles.highest.name;
        let mentionhighestrole = message.mentions.guild.roles.highest.name;

        if (mentionhighestrole > authorhighestrank) {
            message.channel.send('I dont have permissions to kick him');
            return;
        }

        if (!mentionmember.kickable) {
            message.channel.send('I dont have perms to kick him');
        }
        let args = message.content.split(" ").slice(0);

        let reason = args.slice(2).join(" ");

        mentionmember.kick()
            .then(() => {
                mentionmember.send(`You have been kicked from **${message.guild.name}** because: **${reason}**`)
                const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Kick Message')
                    .addFields({
                        name: `${message.mentions.members.first().user.tag} is kicked`,
                        value: `Reason: ${reason}`,
                        inline: false
                    }, {
                        name: `By who is he kicked?`,
                        value: `by ${message.author}`,
                        inline: false
                    })
                    .setFooter(`[-] Invoked by ${message.author.username}`)
                    .setTimestamp()
            
                message.channel.send(embed);
            });
        }
            
            
};