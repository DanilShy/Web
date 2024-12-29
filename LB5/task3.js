const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    } else {
        return newArray;
    }
}

rl.question('Enter elements of the first array separated by space: ', (firstArrayInput) => {
    const firstArray = firstArrayInput.split(' ');
    rl.question('Enter elements of the second array separated by space: ', (secondArrayInput) => {
        const secondArray = secondArrayInput.split(' ');
        rl.question('Enter the maximum length of the new array: ', (maxLengthInput) => {
            const maxLength = parseInt(maxLengthInput, 10);
            console.log(makeArray(firstArray, secondArray, maxLength));
            rl.close();
        });
    });
});
