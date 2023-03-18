// ᴇxᴇ ᴄᴏᴍᴘᴀɴʏ
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping.'),
    execute(interaction, client) {
        interaction.reply({
            content: `dash age to irani ke kolna netet kharabe vali  \n**${client.ws.ping}** ms.📡`
        });
    },
};