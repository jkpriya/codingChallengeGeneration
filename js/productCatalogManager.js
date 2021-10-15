class ProductCatalogManager {
    constructor(products) {
        this.products = products;
    }
    
    searchProduct(text) {
        return this.products.filter(item => item.name.includes(text));
    }

    getPrice(id){
        let matchedItem = this.products.find(item => item.id == id);

        if(matchedItem != undefined)
            return matchedItem.price;
        else
            return 0; //to do later
    }
}