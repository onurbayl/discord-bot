import * as Discord from 'discord.js';
import dotenv from "dotenv"

dotenv.config();

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,

    ]
});

client.on('messageCreate', message => {
    if (message.content.startsWith('-')) {
        if (message.content === '-nasılsın') {
            message.channel.send('İyiyim, teşekkürler siz nasılsınız?')
        }

        else if (message.content.startsWith('-avatar')) {
            const user = message.mentions.users.first() || message.author;
            message.channel.send(user.displayAvatarURL());
        }

        else if (message.content.startsWith('-gh')) {
            message.channel.send(`https://www.github.com/${message.content.split('-')[2]}.png?size=80`)
        }
        else {
            message.channel.send('Bilinmeyen komut\nKomutlar\n=> -nasılsın?\n=> -avatar\n=> -gh-{username}');
        }
    }

})



client.login(process.env.TOKEN)