# Coding Challenge Generation
- Developed By-Priya

## Objective
- Create a Shopping webpage which  allow user to add a time to the cart and display the cart-summary items.dispalys the products and allow the users to add a product and display it in below Cart-Summary table.The cart Summary Table should display the all the item details,individual and grand total selected by the user.It should also give 

> ### WireFrame
>- I took inspiration from shopping websites like e-bay,ikea etc..,

## Functionalities

 1. ### Display products:
    - The products[] array is hard coded and when the webpage loaded all the product details are sent to `class ProductCatalogManager` and rendered by the `loadProducts()` function in a`class ViewManager`.
    ![Image of Products loaded](./images/screenshot1.JPG)

2. ### Search Products :
    - User can search the product they want using search textbox and the filtered products[] array is displaced.
    ` loadFilteredProducts()` method in a `class ViewManager` render the filtered products.
    ![Image of searched Products loaded](./images/screenshot2.JPG)

3. ### Add To Cart:
    - The user can select a no of item and add it to cart by clicking `Add to Cart` button .The product added and all the details are displaced in the cart summary table below.
    ![Image of cart details](./images/screenshot3.JPG)

4. ### Remove():
    - `Remove` action remove the item from the cart.
    ![Image of cart details](./images/screenshot4.JPG)

## Technologies Used

- GITHUB and GIT
- HTML
- CSS
- BootStrap
- Vanilla Java Script
- VS Code
- Chrome Dev tools

## GitHub Page

[GitHub Page](https://jkpriya.github.io/codingChallengeGeneration/)-