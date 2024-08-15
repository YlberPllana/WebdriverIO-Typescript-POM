import Page from './Page.ts';

class ProductsPage extends Page {

    productItemSelector = 'inventory-item';
    productSelector = 'add-to-cart-sauce-labs-bolt-t-shirt';
    productNameSelector = 'inventory-item-name';
    productPriceSelector = 'inventory-item-price';
    removeProductFromCartSelector = 'remove-sauce-labs-bolt-t-shirt';
    shoppingCartSelector = 'shopping-cart-link';
    checkoutSelector = 'checkout';
    titleSelector = 'title';
    firstNameSelector = 'firstName';
    lastNameSelector = 'lastName';
    postalCodeSelector = 'postalCode';
    continueButtonSelector = 'continue';
    subtotalPriceSeelctor = 'subtotal-label';
    taxSelector = 'tax-label';
    totalPriceSelector = 'total-label';
    completeCheckoutSelector = 'finish';
    orderCompletedSelector = 'complete-header';

    public async addProductToCart(selector: string) {
        const product = await browser.getElement(selector);
        await product.waitForClickable();
        await product.click();
    }

    public async navigateToCart() {
        const shoppingCart = await browser.getElement(this.shoppingCartSelector);
        await shoppingCart.waitForClickable();
        await shoppingCart.click();
    }

    public async removeProductFromCart(selector: string) {
        const removeButton = await browser.getElement(selector);;
        await removeButton.waitForClickable();
        await removeButton.click();
    }

    public async proceedToCheckout() {
        const proceedButton = await browser.getElement(this.checkoutSelector);
        await proceedButton.waitForClickable();
        await proceedButton.click();
    }

    public async typeFirstName(firstName: string) {
        const firstNameSelector = await browser.getElement(this.firstNameSelector);
        await firstNameSelector.setValue(firstName);
    }

    public async typeLastName(lastName: string) {
        const lastNameSelector = await browser.getElement(this.lastNameSelector);
        await lastNameSelector.setValue(lastName);
    }

    public async typePostalCode(postalCode: string) {
        const postalCodeSelector = await browser.getElement(this.postalCodeSelector);
        await postalCodeSelector.setValue(postalCode);
    }

    public async continuePurchase() {
        const continueButton = await browser.getElement(this.continueButtonSelector);
        await continueButton.waitForClickable();
        await continueButton.click();
    }

    public async completeCheckout() {
        const completeCheckoutButton = await browser.getElement(this.completeCheckoutSelector);
        await completeCheckoutButton.waitForClickable();
        await completeCheckoutButton.click();
    }

    public open() {
        return super.open();
    }

}

export default new ProductsPage();
