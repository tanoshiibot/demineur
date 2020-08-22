const bot = new (require("discord.js").Client)();
const minesweeper = require("./minesweeper.js");


const PREFIX = ">"

bot.on("ready", _ => console.log("Bot démarré"));

bot.on("message", message => {

    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX + "minesweeper")) {
        //You can change the '(PREFIX + "minesweeper") to better suits how your bot works.

        const [, ...args] = message.content.substring(PREFIX.length).split(/\s+/);

        console.log(args[0]);

        if (args && (args[0] < 0 || args[0] > 64 || (isNaN(args[0]) && args[0] !== undefined))){
            return message.channel.send("Choose a valid amount of bombs (between 0 and 64)");
        }

        const bombs = + args[0] || 16;
        const emoji = args[1] || "\u{1F4A3}";
        const { howManyBombs, positions } = minesweeper(bombs, emoji);            
        message.channel.send(`${howManyBombs} ${emoji}\n${positions}`);
    }
});

bot.login(require("./config/token.json"));


