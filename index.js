const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Gene Bot I am Alive...!"));

app.listen(port, () => console.log(`listening at http://localhost:${port}`));

havenaiceday

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "nge_";

client.on("message", function(message){
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (command === "echo") {
  const string = args.join(" ");
  message.channel.send(string);
}

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }

  else if (command === "set") {
  db.set(args[0], args[1]).then(() => {
    message.channel.send(`I saved <${args[1]}> to ${args[0]}`);
  });
}


  else if (command === "get") {
  db.get(args[0]).then(value => {
    message.channel.send(`The link for ${args[0]} is <${value}>!`);
  })
}
});

client.login(process.env.BOT_TOKEN);
  