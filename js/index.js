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

const priceCalculator = new Pricecalculator(prodCatalogManager);

const viewManager = new ViewManager(prodCatalogManager,cartManager,priceCalculator);
viewManager.loadProducts();
viewManager.loadCartSummaryDetails();

