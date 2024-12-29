const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits`;
    }
}

rl.question('Enter the quantity of droids: ', (quantityInput) => {
    const quantity = parseInt(quantityInput);
    rl.question('Enter the price per droid: ', (pricePerDroidInput) => {
        const pricePerDroid = parseFloat(pricePerDroidInput);
        rl.question('Enter the customer credits: ', (customerCreditsInput) => {
            const customerCredits = parseFloat(customerCreditsInput);
            console.log(makeTransaction(quantity, pricePerDroid, customerCredits));
            rl.close();
        });
    });
});
