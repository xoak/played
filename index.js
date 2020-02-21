var games = {};

client.on('presenceUpdate', (oldMember, newMember) => {
    const channel = newMember.guild.channels.find(ch => ch.name === 'bots');

    if (newMember.presence.game){
        console.log(newMember.presence.game);

        console.log(newMember.user.tag + ': ' + newMember.presence.game.name);
        if (newMember.user.tag in games){
            console.log('user already in games');
        } else {
            games[newMember.user.tag] = { [newMember.presence.game.name]: newMember.presence.game.timestamps.start};
            console.log('user added to games');
            console.log(games);
            //console.log(games['base#0525'][Spectacle]);
            console.log(games['base#0525']['Spectacle']);
        }
    } else {
        console.log(newMember.presence.status + ' no game');
    }
    
});