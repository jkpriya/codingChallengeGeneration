class Pricecalculator {
    #prodCatalogManager;
    constructor(prodCatalogManager){
        this.#prodCatalogManager = prodCatalogManager;
    }

    calculateTotalPrice(cartItems) {
        let priceCalculatedItems = [];
        let grandTotal = 0;

        if (cartItems != undefined && this.#prodCatalogManager != undefined) {
            cartItems.forEach(item => {
                let lineTotal = this.#prodCatalogManager.getPrice(item.id) * item.quantity;
                priceCalculatedItems.push({
                    id: item.id,
                    quantity: item.quantity,
                    lineTotal: lineTotal
                });
                grandTotal += lineTotal;
            });
        }

        return {
            priceCalculatedItems: priceCalculatedItems,
            grandTotal: grandTotal
        };
    }

    applyOffers(summaryItems){
        //to do later
    }
}