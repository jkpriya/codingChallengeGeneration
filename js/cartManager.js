class CartManager {
    constructor() {
        this.cartItems = [];
    }

    updateCartItem(id, quantity) {
        const cartObj = {
            id: id,
            quantity: quantity,
        };
        let matchedCartItem = this.cartItems.find(item => item.id == cartObj.id)

        if (matchedCartItem === undefined)
            this.cartItems.push(cartObj); //add new item to cart
        else if (cartObj.quantity == 0)
            this.deleteCartItem(id); //remove item from cart
        else
            matchedCartItem.quantity = cartObj.quantity; //otherwise update cart quantity

        console.log(this.cartItems);
    }
    deleteCartItem(id) {
        this.cartItems = this.cartItems.filter(item => item.id != id);
    }

}