products = [
    {
        id: 1,
        img: "./images/phone1.gif",
        name: "iPhone 5S ",
        price: 400,
    },
    {
        id: 2,
        img: "./images/laptop.jpg",
        name: "HP Laptop 15 in ",
        price: 2000,
    },
    {
        id: 3,
        img: "./images/ipad3.jpg",
        name: "iPad3 ",
        price: 600,
    },
]


const prodCatalogManager = new ProductCatalogManager(products);

const cartManager = new CartManager();
cartManager.updateCartItem(1, 3);
cartManager.updateCartItem(2, 8);

const priceCalculator = new Pricecalculator();
let output = priceCalculator.calculateTotalPrice(cartManager.cartItems, prodCatalogManager);

const viewManager = new ViewManager();
viewManager.loadProducts(prodCatalogManager);

