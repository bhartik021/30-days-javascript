// 2/3 Loops (for, while, do-while)

// Explanation: Loops are used to repeatedly run a block of code until a certain condition is met.

// - for Loop: A loop that repeats a block of code a certain number of times.
// - while Loop: Repeats a block of code as long as a specified condition is true.
// - do-while Loop: Similar to a while loop, but it runs the block of code once before checking the condition.


// for loop
for(let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}


// while loop
var i = 0;
while(i < 5) {
    console.log("Iteration " + i);
    i++;
}

// do-while loop

var i = 0;
do {
    console.log("Iteration " + i);
    i++;
}while(i < 5);