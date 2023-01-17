/*
Let's modify our addScore function to only add 10 points to the first 3 players.
*/
function addScore(players) {
    return players.map((x , i) => {
        if(i<3)
        x.score += 10;
        return x;
    });
}

module.exports = addScore;
