const bot = new (require("discord.js").Client)();
const minesweeper = require("./demineur.js");

const prefixe = '>'

bot.on("ready", _ => console.log("Bot démarré"));
bot.on("message", message => {
    if (message.content.startsWith(prefixe + "rastapopoulos")) {
        const { howManyRastapopoulos, positions } = minesweeper();
        message.channel.send(`${howManyRastapopoulos} Rastapopoulos\n${positions}`);
    }
});

bot.login(require("./config/token.json"));


