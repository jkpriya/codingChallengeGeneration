class ViewManager {
    loadProducts(productsDisplay) {

        let products = productsDisplay.products;

        products.forEach(product => {
            var productTemplate = document.getElementById("product-template").content.cloneNode(true);

            productTemplate.getElementById("product-image").setAttribute("src", product.img);
            productTemplate.getElementById("product-name").innerHTML = product.name;
            productTemplate.getElementById("product-price").innerHTML = "$" + product.price;
            productTemplate.getElementById("product-quantity").value = 0;
            productTemplate.getElementById("product-quantity").setAttribute("id", "product-quantity-id" + product.id);
            productTemplate.getElementById("btn-add-to-cart").setAttribute("data-product-id", product.id);

            document.getElementById("products-container").appendChild(productTemplate);
        });
    }

    addToCart(btnObj){
        var productId = Number(btnObj.dataset.productId);
        var quantity = Number(document.getElementById("product-quantity-id"+productId).value);

        cartManager.updateCartItem(productId, quantity);
    }
}