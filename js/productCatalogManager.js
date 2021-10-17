class ProductCatalogManager {
    #products;
    constructor(products) {
        this.#products = products;
    }

    get products() {
        return [...this.#products];
    }

    searchProducts(text) {
        
            return this.#products.filter(item => item.name.toUpperCase().includes(text.toUpperCase()));
        
    }

    getProduct(id) {
        return this.#products.find(item => item.id == id);
    }

    getPrice(id) {
        let matchedItem = this.#products.find(item => item.id == id);

        if (matchedItem != undefined)
            return matchedItem.price;
        else
            return 0; //to do later
    }
}