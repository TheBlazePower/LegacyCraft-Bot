const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Information`)
    .setDescription("==========================================")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name:", `${message.guild.name}`, true)
    .addField(":calendar_spiral: Created On:", `${message.guild.createdAt}`, true)
    .addField(":white_check_mark: You Joined:", `${message.member.joinedAt}`, true)
    .addField(":bar_chart: Total Members:", `${message.guild.memberCount}`, true)
    .addField(":chart_with_upwards_trend: Owner:", `${message.guild.owner}`, true)
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
