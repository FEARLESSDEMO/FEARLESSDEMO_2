module.exports = {
    name:'ping',
    descriptions: "Your Ping is",
    execute(message,args) {

        if(message.member.roles.cache.has('836515140526014464')){
            message.channel.send('1000 ms HAHA')

        } else {
            message.channel.send('You Dont Have a Right Permission To Send,Let Me Change That');
            message.member.roles.add('836515140526014464')
        }
    }
}