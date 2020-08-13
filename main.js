const bot = new (require("discord.js").Client)();
const minesweeper = require("./demineur.js");


const PREFIX = '>'

bot.on("ready", _ => console.log("Bot démarré"));
bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX + "minesweeper")) {
        const [command, ...args] = message.content.substring(PREFIX.length).split(/\s+/);
        const bombs = args[0];
        const emoji = args[1];
        const { howManyBombs, positions } = minesweeper(bombs , emoji);
        message.channel.send(`${howManyBombs} ${emoji}\n${positions}`);
    }
});

bot.login(require("./config/token.json"));


