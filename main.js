const bot = new (require("discord.js").Client)();
const minesweeper = require("./minesweeper.js");

const PREFIX = ">"

bot.on("ready", _ => console.log("Bot démarré"));

bot.on("message", message => {

    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX + "minesweeper")) {
        //You can change the '(PREFIX + "minesweeper") to better suits how your bot works.

        const [, ...args] = message.content.substring(PREFIX.length).split(/\s+/);

        //change the value of defaultBombs to change the default number of bombs
        const defaultBombs = 16;
        const defaultEmoji = "\u{1F4A3}";
        //change the value of defaultEmoji to change the default emoji

        function sendMinesweeper (howManybombs, emoji, positions){
            const messageMinesweeper = `${howManyBombs} ${emoji}\n${positions}`;
            if (messageMinesweeper.length > 2000){
            return message.channel.send("Too many characters (>2000). Don't put too much bombs if your emoji name is long.")
            } else {
            return message.channel.send(messageMinesweeper);
            }
        }

        if (args.length == 1 && (isNaN(args[0]) && args[0] !== undefined)){
            let bombs = 16
            let emoji = args[0] 
            const { howManyBombs, positions } = minesweeper(bombs, emoji); 
            sendMinesweeper(howManyBombs, emoji, positions);
        } else if (args[0] < 0 || args[0] > 64 || (isNaN(args[0]) && args[0] !== undefined)){
            return message.channel.send("Choose a valid amount of bombs (between 0 and 64)");
        }

        const bombs = + args[0] || defaultBombs;
        const emoji = args[1] || defaultEmoji;
        const { howManyBombs, positions } = minesweeper(bombs, emoji);
        sendMinesweeper(howManyBombs, emoji, positions);
    }
});

bot.login(require("./config/token.json"));


