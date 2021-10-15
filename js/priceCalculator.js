class Pricecalculator {
    calculateTotalPrice(cartItems, prodCatalogManager) {
        let priceCalculatedItems = [];
        let grandTotal = 0;

        if (cartItems != undefined && prodCatalogManager != undefined) {
            cartItems.forEach(item => {
                let lineTotal = prodCatalogManager.getPrice(item.id) * item.quantity;
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