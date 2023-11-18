// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const cron = require("node-cron");
const fs = require("fs");

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

// Read the contents of the Fajr Start Schedule File
fs.readFile("./Schedules/1-Fajr_1-Start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Fajr Start
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":green_square: *Fajr* time has started.");
      console.log(`${currentTime}: 🟩 Fajr Start announced.`);
    });
  });
});

// Read the contents of the Fajr Reminder Schedule File
fs.readFile("./Schedules/1-Fajr_2-Reminder.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Fajr Reminder
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":yellow_square: *Fajr* time has nearly ended.");
      console.log(`${currentTime}: 🟨 Fajr Reminder announced.`);
    });
  });
});

// Read the contents of the Fajr End Schedule File
fs.readFile("./Schedules/1-Fajr_3-End.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Fajr End
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":red_square: *Fajr* time has ended.");
      console.log(`${currentTime}: 🟥 Fajr End announced.`);
    });
  });
});


// Read the contents of the Zuhr Start Schedule File
fs.readFile("./Schedules/2-Zuhr_1-Start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Zuhr
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":green_square: *Zuhr* time has started.");
      console.log(`${currentTime}: 🟩 Zuhr Start announced.`);
    });
  });
});

// Read the contents of the Zuhr Reminder Schedule File
fs.readFile("./Schedules/2-Zuhr_2-Reminder.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Zuhr Reminder
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":yellow_square: *Zuhr* has nearly ended.");
      console.log(`${currentTime}: 🟨 Zuhr Reminder announced.`);
    });
  });
});


// Read the contents of the Asr Start Schedule File
fs.readFile("./Schedules/3-Asr_1-Start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Asr Start
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":green_square: *Asr* time has started.");
      console.log(`${currentTime}: 🟩 Asr Start announced.`);
    });
  });
});

// Read the contents of the Asr Reminder Schedule File
fs.readFile("./Schedules/3-Asr_2-Reminder.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Asr Reminder
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":yellow_square: *Asr* time has nearly ended.");
      console.log(`${currentTime}: 🟨 Asr Reminder announced.`);
    });
  });
});


// Read the contents of the Maghrib Start Schedule File
fs.readFile("./Schedules/4-Maghrib_1-Start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Maghrib Start
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":green_square: *Maghrib* time has started.");
      console.log(`${currentTime}: 🟩 Maghrib announced.`);
    });
  });
});

// Read the contents of the Maghrib Reminder Schedule File
fs.readFile("./Schedules/4-Maghrib_2-Reminder.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Maghrib Reminder
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":yellow_square: *Maghrib* time has nearly ended.");
      console.log(`${currentTime}: 🟨 Maghrib Reminder announced.`);
    });
  });
});


// Read the contents of the Isha Start Schedule File
fs.readFile("./Schedules/5-Isha_1-Start.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Isha
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send(":green_square: *Isha* time has started.");
      console.log(`${currentTime}: 🟩 Isha announced.`);
    });
  });
});