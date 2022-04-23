const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
client.login("OTYyNTQxMTc2MTUyNTQzMjMy.YlJCUw.xK2gMlqYVgK8j9Xp3HyONxKl8RE")



client.on ("messageCreate", message => {
    if (message.content == "!server") {
        const Luc = new Discord.MessageEmbed()
        .setTitle ("Ecco a voi tutti i miei server")
        .setDescription ("**⚡Ryze Community⚡** = **https://discord.gg/UfZ8B2XRcQ** \n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n** 🇮🇹Xbox community Italia🇮🇹 = https://discord.gg/6z2Dye5qGP**")
        .setColor ("GREEN")
        .setTimestamp ()

        message.delete()
        message.channel.send({ embeds: [Luc] })
    }
})

client.on ("messageCreate", message => {
    if (message.content == "!ryze") {
        const ryze = new Discord.MessageEmbed()
        .setTitle ("AMORE")
        .setDescription ("Faffo + Ryze = ♥️")
        .setColor ("RED")
        .setTimestamp ()

        message.delete()
        message.channel.send({ embeds: [ryze] })
    }
})



client.on ("messageCreate", message => {
    if (message.content == "!luc") {
        const luc = new Discord.MessageEmbed()
        .setTitle ("IL MEME DI DISCORD")
        .setDescription ("Luc3606 = MEME mondiale")
        .setColor ("GREEN")
        .setTimestamp ()

        message.delete()
        message.channel.send({ embeds: [luc] })
    }
})




client.on("messageCreate", message => {
    if (message.content.startsWith("!me")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<:Azione:967430949979709500>__Azione RP__<:Azione:967430949979709500>")
                .setDescription(`${message.author.toString()} → ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Ryze's City"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})




client.on("messageCreate", message => {
    if (message.content.startsWith("!tweet")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("<:twitter:967329143068979260> __Twitter__ <:twitter:967329143068979260>")
                .setDescription(`${message.author.toString()} → ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Ryze's City"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


client.on("messageCreate", message => {
    if (message.content.startsWith("!ig")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setTitle("<:instagram:967329894793113660>__Instagram__<:instagram:967329894793113660>")
                .setDescription(`${message.author.toString()} → ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Ryze's City" });
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


client.on("messageCreate", message => {
    if (message.content.startsWith("!anon")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setTitle("<:anonimo:967330451909935164>__MESSAGGIO ANONIMO__<:anonimo:967330451909935164>")
                .setDescription(` ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Ryze's City"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



client.on ("messageCreate", message => {
    if (message.content == "!help") {
        const Comandi = new Discord.MessageEmbed()
        .setTitle ("📋__Lista Comandi__📋")
        .setDescription ("**!me ** <a:FrecciaDestra:967358936812519444>   __Fare un azione in RP__<:Azione:967430949979709500> \n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n **!ig ** <a:FrecciaDestra:967358936812519444>   __Postare contenuti su instagram__<:instagram:967329894793113660> \n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n **!tweet ** <a:FrecciaDestra:967358936812519444>   __Postare contenuti su twitter__<:twitter:967329143068979260> \n ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ \n **!anon ** <a:FrecciaDestra:967358936812519444>   __Per inviare messaggi anonnimi sul dark web__<:anonimo:967330451909935164>")
        .setColor ("RED")
        .setTimestamp ()

        message.delete()
        message.channel.send({ embeds: [Comandi] })
    }
})


client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    member.roles.add("967426808175788072");
});

//BENVENUTO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("WELCOME")
        .setDescription(`Ciao ${member.toString()}, benvenuto in  ${member.guild.name}. Sei il **${member.guild.memberCount}° Membro**`)

    client.channels.cache.get("967441230470451240").send({embeds: [embed]}); 
})
//ADDIO
client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("GOODBEY")
        .setDescription(`Arrivederci ${member.toString()}, ci rivediamo presto qui in ${member.guild.name}`)

    client.channels.cache.get("967441349076983828").send({embeds: [embed]}); 
})