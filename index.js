const mineflayer = require('mineflayer');

let firstTime = true;

function createBot() {
  const bot = mineflayer.createBot({
    host: 'mcunity.aternos.me', // Change this if needed
    port: 42417,
    username: 'SAIM_Ka_bot' // Your bot name
  });

  bot.on('spawn', () => {
    console.log("✅ Bot spawned.");

    // Send register or login command
    if (firstTime) {
      bot.chat('/register 123456');
      firstTime = false;
    } else {
      bot.chat('/login 123456');
    }

    // Make bot jump every 1.5 seconds
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
