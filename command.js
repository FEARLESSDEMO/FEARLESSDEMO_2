module.exports = {
    name: 'command',
    descriptions: "Embeds!",
    execute(message,args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#33FFE2')
        .setTitle('Rules')
        .setURL('https://gist.github.com/Ryonez/ea992e49d4923980426b0128603fd42f')
        .setDescription('This Is Embed For Server Rules')
        .addFields(
            {name:'Rule 1', value: 'Be Nice'},
            {name:'Rule 2', value: 'Be Polite'},
            {name:'Rule 3', value : 'Dont Not Spam'},
        )
        .setImage('https://drive.google.com/file/d/16mh2zOaGl97Wp1I9T275vvxyFspg_7JN/view?usp=sharing')
        .setFooter('Make sure to check out the rules channel')
        

        message.channel.send(newEmbed);
    }
}