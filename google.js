module.exports = {
    name:'google',
    descriptions: "Hello Google",
    execute(message,args) {

        if(message.member.roles.cache.has('836515140526014464')){
            message.channel.send('https://google.com/')    

        } else {
            message.channel.send('You dont have a Right permission To Browse Google');
        }
    }
}