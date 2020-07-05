// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('NjY4OTQ3MTk3MjQ4OTI5ODEz.XiYsBA.zuzceRuY26cibFia6wyWaGF7lqI');




client.on('message', message => {
	if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.'+ message.author.username);
    }
    message.react('👍');
    
});

