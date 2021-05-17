module.exports = {
    name:'youtube',
    descriptions: "Your Ping is",
    execute(message,args) {

        if(message.member.roles.cache.has('836515140526014464')){
            message.channel.send('https://youtube.com/')

        } else {
            message.channel.send('You dont have a Right permission To send This Command ');
        }
    }
}