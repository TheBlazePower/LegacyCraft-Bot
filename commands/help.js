const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username}, Command List`)
    .setDescription("**==========================================**")
    .setColor("#15f153")
    .addField("General:", "**==========================================** \n**Invite** \nName: .invite \nDescription: You Can Join My Owner Discord By Using This Command \n**Help** \nName: .help \nDescription: This Command Will Tell About Command List In Your Dm \n**BotInfo** \nName: .botinfo \nDescription: This Bot Will Giving You A Information \n**LegacyCraft** \nName: .legacycraft apakah <text> \nDescription: This Command Is 8ball You Can Make Q&A With This Command \nUsage: .legacycraft apakah saya keren? \n**Report** \nName: .report <@user> <reason> \nDescription: If a member or anything just break your discord rules, just report him \nUsage: .report @user#1234 cheating \n**ServerInfo** \nName: .serverinfo \nDescription: This Command Will give Server Information \n**BanAppeal** \nName: .banappeal \nDescription: If You Get Banned From Minecraft Server Type This \n**Weather** \nName: .weather <city> \nDescription: This Command Will Information Your City \nUsage: .weather jakarta")
    .addField("Moderator:", "**==========================================** \n**Ban** \nName: .ban <@user> <reason> \nDescription: This Thing Can Ban a Member If They Breaking Your Discord Rules \nUsage: .ban @user#1234 Advertiser \n**Clear** \nName: .clear <1-100> \nDescription: A Clear Chat Will Remove About All Message Of Spammer Or Flooding \nUsage: .clear 60 \n**Kick** \nName: .kick <@user> <reason> \nDescription: You Can Kick User If They Hate You Or What \nUsage: .kick @user#1234 advertiser \n**AddRole** \nName: .addrole <@user> <roles> \nDescription: You Can Add A User If They Don\'t Have Member Roles \nUsage: .addrole @user#1234 member \n**RemoveRole** \nName: .removerole <@user> <roles> \nDescription: If They Never Online You Can Remove Their Roles \nUsage: .removerole @user#1234 member \n**Warn** \nName: .warn <user> <reason> \nDescription: Warn User If They Spamming \nUsage: .warn @user#1234 spam/flood \n**WarnLevel** \nName: .warnlevel <@user>")
    .setFooter(`${bot.user.username} | Official CutePeople Bot, Was Currently BETA Mode`);

    message.author.send(`Please Wait To Sending Help Page`).then(msg => msg.edit(botembed));

    let embed = new Discord.RichEmbed()
    .setTitle(`**${message.author.tag} Sending Help Page To Your DM :mailbox_with_mail:**`)
    .setColor("#15f153")

    message.channel.send(`Please Wait 5 Second To Sending a Message`).then(msg => msg.edit(embed));

}

module.exports.help = {
  name:"help"
}
