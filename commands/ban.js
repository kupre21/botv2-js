const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban people',
    execute(message, client) {
        const error_message = new Discord.MessageEmbed()
            .setTitle('🛑 Error Occured [You might not have Administrator]')
            .setColor('RED')
            .setTimestamp()

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(error_message)
        
        let args = message.content.split(" ").slice(0);
        
        let mentionmember = message.mentions.members.first();

        if (!mentionmember) return message.reply('Please tag member that you want to ban. ');  

        let authorhighestrank = message.guild.roles.highest.name;
        let mentionhighestrole = message.mentions.guild.roles.highest.name;

        if (mentionhighestrole > authorhighestrank) {
            return message.reply('I can\'t ban that member. \'bem li ti kevicu'); 
        }

        if (!mentionmember.bannable) {
            return message.channel.send('I don\'t have permissions to ban him. ');  
        }

        let reason = args.slice(2).join(" ");

        if (!reason) reason = 'Unspecified'

        mentionmember.ban({ days: 7, reason: reason })
            .then(() => {
                mentionmember.send(`You have been banned from **__${message.guild.name}__** because: **__${reason}__**`);
                const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Ban Message')
                    .addFields({
                        name: `${message.mentions.members.first().user.tag} is banned`,
                        value: `Reason: ${reason}`,
                        inline: false
                    }, {
                        name: `By who is he banned?`,
                        value: `By ${message.author}`,
                        inline: false
                    })
                    .setFooter(`[-] Invoked by ${message.author.username}`)
                    .setTimestamp()
                message.channel.send(embed);
            }).catch(error => {
                message.channel.send('Oops something went wrong');
                message.react('👎');
                console.log(error);
            })
    }
}