const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 150 }
];

/**
 * @param {number} productId 
 * @param {function} successCallback 
 * @param {function} errorCallback 
 */

function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find(p => p.id === productId);

    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Product with ID ${productId} not found.`);
    }
}

getProductDetails(
    2, 
    (product) => {
        console.log('Product found:', product);
    },
    (error) => {
        console.error('Error:', error);
    }
);
