const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
let intIdx;

bot.start((ctx) => ctx.reply("Welcome"));
bot.hears("hi", (ctx) => ctx.reply("Hey there!"));

bot.hears("start", (ctx) => {
  if (intIdx) clearInterval(intIdx);
  // Ограничение на работу бота только до 16.05.2022
  if (1652730197386 > +new Date()) {
    intIdx = setInterval(async () => {
      // НАСТРОЙКА: здесь указываешь "логин" (@ЛОГИН_ГРУППЫ)группы, если нужно отправить в несколько групп,
      // копируешь нижние 15 строчек кода, вставляешь следом за скопированными, везде меняешь логин группы, сохраняешь этот документ
      await ctx.telegram.sendPhoto("@testgroupforspambot", {
        source: "./assets/img/1.jpg",
      });
      await ctx.telegram.sendPhoto("@testgroupforspambot", {
        source: "./assets/img/2.jpg",
      });
      ctx.telegram.sendMessage(
        "@testgroupforspambot",
        // НАСТРОЙКА: здесь изменяешь текст, в конце сообщения, указываешь логин аккаунта,
        // который рекламируешь в формате t.me/ЗДЕСЬ_ЛОГИН или @ЗДЕСЬ_ЛОГИН
        `Первая линия
  
Вторая линия
  
Третья линия
  
ЗДЕСЬ_ЛОГИН`
      );
      // НАСТРОЙКА: здесь меняешь периодичность спама (30мин = 1800000)
    }, 10000);
  }
});

bot.launch();
