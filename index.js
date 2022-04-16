const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there!"));

let intIdx;

bot.hears("start", (ctx) => {
  if (intIdx) clearInterval(intIdx);

  intIdx = setInterval(async () => {
    await ctx.telegram.sendPhoto("@testgroupforspambot", {
      source: "./assets/img/1.jpg",
    });
    await ctx.telegram.sendPhoto("@testgroupforspambot", {
      source: "./assets/img/2.jpg",
    });
    ctx.telegram.sendMessage(
      "@testgroupforspambot",
      "Первая линия 🏢 \n\nВторая линия 🥰😇\n\nТретья линия 💋\n\nt.me/alexeyinn"
    );
  }, 10000);
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
