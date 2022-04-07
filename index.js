// Code your solutions in this file
function writeCards (namesArray, occasion) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`)
    }
    return thankYouCards
}

function countDown (positiveInteger) {
    while (positiveInteger > 0) {
        console.log(positiveInteger);
        positiveInteger -= 1;
    }
    console.log(positiveInteger);
}