process.stdin.setEncoding('utf-8');

console.log("Welcome to Holberton School, what is your name?");


process.stdin.on('data', (INPUT) => {
    console.log(`Your name is: ${INPUT.trim()}`);
    process.exit()
});

process.on('exit', () => {
    console.log("This important software is now closing")
})
