const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

const token = config.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I\'m a bot.');
});

console.log('Bot is running...');