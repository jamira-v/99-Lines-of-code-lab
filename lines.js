var friends = ['Samantha', 'Raya', 'John', 'Lorena', 'Corinne'];
//2 for loops, one nested in the other
//console.log('friends');
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i] + ':');
    //outer for loop that iterates through friends array
    //inner for loop runs through each friend for every line of the song
    // -- is the decrement operator that subtracts one from its operand and returns the pre or post value depending on the operator placement
    for (n = 99; n < 100; n--) {
        //=== is a comparison type, returns true if the operands are equal of the same type
        //nested if/else statements; each statement runs through the friends array indexed at 0
        if (n === 2) {
            console.log(n + " lines of code in the file, " + n + "lines of code; " + [friends[i]] + "strikes on out, clears it all out, " + [n-1] + "line of code in the file!");
        } else {
            if (n === 1) {
                console.log(n + "lines of code in the file," + n + "lines of code;" + [friends[i]] + "strikes one out, clears it all out, no more lines of code in the file!");
                //breaks and ends the loop if this statement runs
                break
            } else {
                console.log(n + "lines of code in the file," + n + "lines of code;" + [friends[i]] + "strikes one out, clears it all out, " + [n-1] + "lines of code in the file!");
            }
        }
    }
    
} 
