const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

/**
 * @param {Array} medicines
 * @returns {Array}
 */
const applyDiscountAndAddId = (medicines) => {
    return medicines
        .filter(medicine => medicine.price > 300) 
        .map((medicine, index) => {
            const discountedPrice = medicine.price * 0.7; 
            return {
                id: index + 1, 
                name: medicine.name,
                price: discountedPrice.toFixed(2), 
            };
        });
};

const updatedMedicines = applyDiscountAndAddId(medicines);
console.log(updatedMedicines);
