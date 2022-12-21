/*
The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only)
Returns the total score of the players hand.
The cards are represented by the first letter in the name of the card:
A "K" is 4 points
A "Q" is 3 points
A "J" is 2 points
*/

function playerHandScore(hand) {
    totalScore=0;
    const card ={ "K" : 4, "Q" : 3, "J" : 2};
    for(let i=0;i<hand.length;i++)
    {
        totalScore += card[hand[i]];
    }
    return totalScore;
}

module.exports = playerHandScore;