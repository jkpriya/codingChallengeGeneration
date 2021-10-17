products = [
    {
        id: 1,
        img: "./images/AppleiPhoneXR.jpg",
        name: "Apple iPhone XR 64GB Retina Display",
        price: 599,
    },
    {
        id: 2,
        img: "./images/GalaxyS21Ultra.jpg",
        name: "Samsung Galaxy S21 Ultra 256GB",
        price: 1649,
    },
    {
        id: 3,
        img: "./images/SamsungGalaxyA22.jpg",
        name: "Samsung Galaxy A22 128GB 5G",
        price: 599,
    },
    {
        id: 4,
        img: "./images/HPLaptop.jpg",
        name: "HP Laptop 13\" Core i5, 8GB RAM, 128GB HDD",
        price: 1099,
    },
    {
        id: 5,
        img: "./images/iMac.jpg",
        name: "Apple iMac Retina 5K 27-inch 3.8GHz 512GB ",
        price: 3449,
    },
    {
        id: 6,
        img: "./images/iPad.jpg",
        name: "Apple iPad Pro 11-inch 128GB Wi-Fi",
        price: 1199,
    },
]


const prodCatalogManager = new ProductCatalogManager(products);

const cartManager = new CartManager();

const priceCalculator = new Pricecalculator(prodCatalogManager);

const viewManager = new ViewManager(prodCatalogManager,cartManager,priceCalculator);
viewManager.loadProducts();
viewManager.loadCartSummaryDetails();

