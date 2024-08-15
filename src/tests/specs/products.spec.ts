import ProductsPage from '../../page-objects/Products.ts';

describe('Browse and manage products', () => {

    beforeEach(async () => {
        await browser.login(process.env.USERNAME, process.env.PASSWORD);
    });

    it('should allow the user to add nad remove a product from the cart', async () => {
        await ProductsPage.addProductToCart(ProductsPage.productSelector);
        await ProductsPage.navigateToCart();

        const currentUrl = await browser.getRelativeUrl();
        // Verify that user is located in cart page by checking url
        await expect(currentUrl).toEqual('/cart.html');

        const titleText = await browser.getTextOfElement(ProductsPage.titleSelector);
        // Verify that user is located in cart page by checking text
        await expect(titleText).toEqual('Your Cart');

        const productName = await browser.getTextOfElement(ProductsPage.productNameSelector);
        // Verify that the product name is correct
        await expect(productName).toEqual('Sauce Labs Bolt T-Shirt');

        const productPrice = await browser.getTextOfElement(ProductsPage.productPriceSelector);
        // Verify that the product price is correct
        await expect(productPrice).toEqual('$15.99');

        await ProductsPage.removeProductFromCart(ProductsPage.removeProductFromCartSelector);

        const productItem = await browser.verifyIfElementIsDisplayed(ProductsPage.productItemSelector);
        // Verify that product is removed successfully from the cart by checking if product item selector is displayed or not
        await expect(productItem).toBeFalsy();

        const productItemLength = await browser.getAllElements(ProductsPage.productItemSelector);
        // Verify that product is removed successfully from the cart by checking if product item length is equal to 0
        await expect(productItemLength).toBeElementsArrayOfSize(0);
    });

    it('should allow the user to purchase a product', async () => {
        await ProductsPage.addProductToCart(ProductsPage.productSelector);
        await ProductsPage.navigateToCart();

        const productName = await browser.getTextOfElement(ProductsPage.productNameSelector);
        // Verify that the product name is correct
        await expect(productName).toEqual('Sauce Labs Bolt T-Shirt');

        const productPrice = await browser.getTextOfElement(ProductsPage.productPriceSelector);
        // Verify that the product price is correct
        await expect(productPrice).toEqual('$15.99');

        await ProductsPage.proceedToCheckout();

        // Verify that user is located in checkout page by verifying url and page title
        const titleText = await browser.getTextOfElement(ProductsPage.titleSelector);
        await expect(titleText).toEqual('Checkout: Your Information');
        const currentUrl = await browser.getRelativeUrl();
        await expect(currentUrl).toEqual('/checkout-step-one.html');

        await ProductsPage.typeFirstName('Ylber');
        await ProductsPage.typeLastName('Pllana');
        await ProductsPage.typePostalCode('42000');
        await ProductsPage.continuePurchase();

        const productNameInCheckout = await browser.getTextOfElement(ProductsPage.productNameSelector);
        // Verify that the product name in Checkout page is correct
        await expect(productNameInCheckout).toEqual('Sauce Labs Bolt T-Shirt');

        const productPriceInCheckout = await browser.getTextOfElement(ProductsPage.productPriceSelector);
        // Verify that the product price in Checkout page is correct
        await expect(productPriceInCheckout).toEqual('$15.99');

        const subtotalPrice = await browser.getTextOfElement(ProductsPage.subtotalPriceSeelctor);
        // Verify that the subtotal product price in Checkout overview page is correct
        await expect(subtotalPrice).toEqual('Item total: $15.99');

        const tax = await browser.getTextOfElement(ProductsPage.taxSelector);
        // Verify that the product tax in Checkout overview page is correct
        await expect(tax).toEqual('Tax: $1.28');

        const totalPrice = await browser.getTextOfElement(ProductsPage.totalPriceSelector);
        // Verify that the total product price in Checkout overview page is correct
        await expect(totalPrice).toEqual('Total: $17.27');

        await ProductsPage.completeCheckout();

        const titleTextAfterCompleteCheckout = await browser.getTextOfElement(ProductsPage.titleSelector);
        // Verify that order is completed
        await expect(titleTextAfterCompleteCheckout).toEqual('Checkout: Complete!');

        const orderCompletedText = await browser.getTextOfElement(ProductsPage.orderCompletedSelector);
        // Verify that order is completed
        await expect(orderCompletedText).toEqual('Thank you for your order!');

        const urlAfterCompletedCheckout = await browser.getRelativeUrl();
        // Verify that order is completed
        await expect(urlAfterCompletedCheckout).toEqual('/checkout-complete.html');
    });

});

