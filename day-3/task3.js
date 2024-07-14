// 3/3 Break and Continue Statements

// Explanation: break and continue statements are used to control the flow of loops.

// - break Statement: Exits the loop immediately.
// - continue Statement: Skips the current iteration and moves to the next iteration.

// break statement
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log("Iteration " + i);
}

// continue statement
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log("Iteration " + i);
}