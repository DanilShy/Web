function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = function () {
        return this.items;
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    };
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(storage.getItems());

storage.addItem("orange");
console.log(storage.getItems());

storage.removeItem("banana");
console.log(storage.getItems());
