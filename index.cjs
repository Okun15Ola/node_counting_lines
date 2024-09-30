const fs = require('fs');

fs.readFile(__filename, 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading the file', err);
        return;
    }

    const lines = (data.split('\n'));

    const numberOfLines = lines.length;

    let x;
    let y;
    let z;
    console.log(`The number of lines appears to be ${numberOfLines}`);
})