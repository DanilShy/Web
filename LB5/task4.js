const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    return array;
}

function sumBetweenMinMax(array) {
    let minIndex = 0, maxIndex = 0;
    array.forEach((num, index) => {
        if (num < array[minIndex]) minIndex = index;
        if (num > array[maxIndex]) maxIndex = index;
    });

    if (minIndex > maxIndex) {
        [minIndex, maxIndex] = [maxIndex, minIndex];
    }

    let sum = 0;
    for (let i = minIndex + 1; i < maxIndex; i++) {
        sum += array[i];
    }
    return sum;
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

rl.question('Enter the length of the array: ', (lengthInput) => {
    const length = parseInt(lengthInput, 10);
    const array = createArray(length);
    
    console.log('Original array:', array);
    
    const sum = sumBetweenMinMax(array);
    console.log('Sum between min and max elements:', sum);
    
    const sortedArray = quickSort(array);
    console.log('Sorted array:', sortedArray);
    
    rl.close();
});
