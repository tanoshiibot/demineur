const bot = new (require("discord.js").Client)();
const minesweeper = require("./minesweeper.js");


const PREFIX = '>'

bot.on("ready", _ => console.log("Bot démarré"));

bot.on("message", message => {

    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX + "minesweeper")) {
        //You can change the '(PREFIX + "minesweeper") to better suits how your bot works.

        const [command, ...args] = message.content.substring(PREFIX.length).split(/\s+/);

        //You can change default values here.
        const bombsDefault = 16
        const emojiDefault = '\u{1F4A3}'
        //You can change dafault values here

        function messageGame () {
            const bombs = args[0];
            console.log(args[0]);
            const emoji = args[1];
            const { howManyBombs, positions } = minesweeper(bombs , emoji);
                    
            message.channel.send(`${howManyBombs} ${emoji}\n${positions}`);
        }

        if (args.length > 0 && (args[0] < 0 || args[0] > 64 || isNaN(args[0]))){
            message.channel.send('Choose a valid bombs number (between 0 and 64)');
        } else if (args.length < 1) {
            args[0] = bombsDefault;
            args[1] =  emojiDefault;
            messageGame();
        } else if (args.length == 1){
            args[1] =  emojiDefault;
            messageGame();
        } else {
            messageGame();
        }

    }
});

bot.login(require("./config/token.json"));


