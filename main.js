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

// Read the contents of the Fajr Schedule File
fs.readFile("./Schedule_Files/ScheduleFajr.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Fajr
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Fajr* time has started.");
      console.log(`${currentTime}: Fajr announced.`);
    });
  });
});


// Read the contents of the Sunrise Schedule File
fs.readFile("./Schedule_Files/ScheduleSunrise.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Sunrise
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Fajr* time has ended.");
      console.log(`${currentTime}: Sunrise announced.`);
    });
  });
});


// Read the contents of the Zuhr Schedule File
fs.readFile("./Schedule_Files/ScheduleZuhr.txt", "utf-8", (err, data) => {
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
      channel.send("*Zuhr* time has started.");
      console.log(`${currentTime}: Zuhr announced.`);
    });
  });
});


// Read the contents of the Asr Schedule File
fs.readFile("./Schedule_Files/ScheduleAsr.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Asr
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Asr* time has started.");
      console.log(`${currentTime}: Asr announced.`);
    });
  });
});


// Read the contents of the Maghrib Schedule File
fs.readFile("./Schedule_Files/ScheduleMaghrib.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Maghrib
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Maghrib* time has started.");
      console.log(`${currentTime}: Maghrib announced.`);
    });
  });
});


// Read the contents of the Isha Schedule File
fs.readFile("./Schedule_Files/ScheduleIsha.txt", "utf-8", (err, data) => {
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
      channel.send("*Isha* time has started.");
      console.log(`${currentTime}: Isha announced.`);
    });
  });
});


// Read the contents of the Midnight Schedule File
fs.readFile("./Schedule_Files/ScheduleMidnight.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Midnight
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Isha* time has ended.");
      console.log(`${currentTime}: Midnight announced.`);
    });
  });
});


// Read the contents of the Suhoor Schedule File
fs.readFile("./Schedule_Files/ScheduleSuhoor23.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Suhoor
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Sehri* time has ended. <@&1086721651204423710>");
      console.log(`${currentTime}: Suhoor announced.`);
    });
  });
});


// Read the contents of the Iftaar Schedule File
fs.readFile("./Schedule_Files/ScheduleIftaar23.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
 // Schedule the message for Iftaar
  const scheduleEntries = data.split("\n");
  scheduleEntries.forEach(entry => {
    const [date, time] = entry.split(" ");
    const [hours, minutes] = time.split(":");
    const [month, day] = date.split("/");
    const schedule = `${minutes} ${hours} ${day} ${month} *`;
    cron.schedule(schedule, () => {
      const currentTime = new Date();
      const channel = client.channels.cache.get("1073118217192620052");
      channel.send("*Iftaari* time has started. <@&1086721651204423710>");
      console.log(`${currentTime}: Suhoor announced.`);
    });
  });
});
