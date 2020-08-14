const bot = new (require("discord.js").Client)();
const minesweeper = require("./demineur.js");


const PREFIX = '>'

bot.on("ready", _ => console.log("Bot démarré"));

bot.on("message", message => {

    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX + "minesweeper")) {

        const [command, ...args] = message.content.substring(PREFIX.length).split(/\s+/);

        function messageGame () {
            const bombs = args[0];
            console.log(args[0]);
            const emoji = args[1];
            const { howManyBombs, positions } = minesweeper(bombs , emoji);
                    
            message.channel.send(`${howManyBombs} ${emoji}\n${positions}`);
        }

        if (args[0] < 0 || args[0] > 64 || isNaN(args[0])){
            message.channel.send('Choisissez un nombre de bombes valide (entre 0 et 64).');
        } else if (args.length < 1) {
            args[0] = 20;
            args[1] =  '\u{1F4A3}';
            messageGame();
        } else if (args.length == 1){
            args[1] =  '\u{1F4A3}';
            messageGame();
        } else {
            messageGame();
        }

    }
});

bot.login(require("./config/token.json"));


