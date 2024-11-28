process.stdin.setEncoding('utf-8');

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', (INPUT) => {
    process.stdout.write(`Your name is: ${INPUT.trim()}\n`);
    process.exit()
});

process.on('exit', () => {
    console.log("This important software is now closing")
});
