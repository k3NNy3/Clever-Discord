//kennys discord-steam bot
//written for use with node.js, discord.js & steam-store

//what channel to listen to, comment out if all channels
var channelid = ''
//what user to listen to on important commands, required to prevent abuse
var adminid = ''
//Bot token
const token = '';
//what you want the command prefix to be
const prefix = "";


//vars
const Discord = require('discord.js');
const bot = new Discord.Client();
var Cleverbot = require('cleverbot-node');
cleverbot = new Cleverbot;

//connect the bot
bot.on('ready', () => {
  console.log('Bot is connecting');
});


//Chat Commands
bot.on("message", msg => {
 
  //checks if a message starts with the prefix to prevent slowdown latter on
  if(!msg.content.startsWith(prefix)) return;
  //check if the bot is alive
  if (msg.content.startsWith(prefix + "ping")) {
    if (msg.channel.id === channelid) {
		msg.channel.sendMessage("pong!");
		console.log("Responding to ping")
  }} 
  //provides a list of commands	
  if (msg.content.startsWith(prefix + "help")) {
    if (msg.channel.id === channelid) {
		msg.channel.sendMessage("commands are :\n```!ping : checks if bot is working\n!info : provides bot info\n!exit : exits bot(admin only)\n!donate : provides donation information\n!clever (message) : talk with cleverbot```");
		console.log("Responding to help")
  }} 
  //provides bot info
  if (msg.content.startsWith(prefix + "info")) {
    if (msg.channel.id === channelid) {
		msg.channel.sendMessage("Clever discord Bot made by Kenny");
		console.log("Responding to info")
  }}
  //kills the bot, admin only	
  if (msg.content.startsWith(prefix + "exit")) {
	if(msg.author.id === adminid){
		if (msg.channel.id === channelid) {
			msg.channel.sendMessage("Goodbye");
			console.log("exiting")
			bot.destroy()
	return(0);
	}}}  
  //provids donation infromation
  if (msg.content.startsWith(prefix + "donate")) {
    if (msg.channel.id === channelid) {
		msg.channel.sendMessage("Doante to this project\n```BTC : 1J6mpRC92aYxV9fYTJPcb5TSKqvyZ6tMem\nLTC : LWVP6tooXQ5qZdiNbDxALEHXoDrpdXcF1c```");
		console.log("Responding to donate")
  }};
  //cleverbot command  
  if (msg.content.startsWith(prefix + "clever")) {
    if (msg.channel.id === channelid) {
		let args = msg.content.split(" ").slice(1);
		Cleverbot.prepare(function(){
			cleverbot.write(args, function (response) {
				msg.channel.sendMessage(response.message);
			});
		});
		console.log("Celeverbot");
  }}; 
});
//login the bot using the token
bot.login(token);