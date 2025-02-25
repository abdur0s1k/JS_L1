function bingo(ticket, win) {
    let miniWins = 0;
    
    for (const [str, num] of ticket) {
        if ([...str].some(char => char.charCodeAt(0) === num)) {
            miniWins++;
        }
    }
    
    return miniWins >= win ? 'Winner!' : 'Loser!';
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); 
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 3)); 
console.log(bingo([['XYZ', 88], ['PQR', 80]], 1)); 
console.log(bingo([['A', 66], ['B', 67]], 2)); 