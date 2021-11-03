const { Client, Intents, MessageActionRow, MessageButton,} = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
	console.log('Ready!');
});

//If the name of the slash command is 'goup'
if (interaction.commandName === 'button'){
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Please read it here.')//Here is the text that will appear on the button.
                .setStyle('LINK')
                .setURL("messagelink, etc."), //Please put the URL here.
        );
    await interaction.reply({content: "‌ ",components: [row]});
};

client.login('YOUR_BOT_TOKEN');//Please put the BOTtoken here.
