const bot = new (require("discord.js").Client)();

bot.on("ready", _ => console.log("Bot démarré"));
bot.on("message", message => {
  // Détecter les commandes
});

bot.login(require("./config/token.json"));
