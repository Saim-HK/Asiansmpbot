const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'your.server.ip', // <- change this
    port: 25565,
    username: 'MyBot' // <- use any bot name
  });

  bot.on('spawn', () => {
    console.log("✅ Bot spawned.");

    // Jump every 1.5 seconds
    setInterval(() => {
      bot.setControlState("jump", true);
      setTimeout(() => {
        bot.setControlState("jump", false);
      }, 500);
    }, 1500);
  });

  bot.on('end', () => {
    console.log("⚠️ Bot disconnected. Reconnecting in 5 seconds...");
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log("❌ Bot error:", err.message);
  });
}

createBot();