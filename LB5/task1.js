const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const message = `Shipping to ${country} will cost ${totalPrice} credits`;
    return message;
}

rl.question('Enter the country: ', (country) => {
    rl.question('Enter the price: ', (priceInput) => {
        const price = parseFloat(priceInput);
        rl.question('Enter the delivery fee: ', (deliveryFeeInput) => {
            const deliveryFee = parseFloat(deliveryFeeInput);
            console.log(getShippingMessage(country, price, deliveryFee));
            rl.close();
        });
    });
});
