import LoginPage from '../../page-objects/Login.ts';
import ProductsPage from '../../page-objects/Products.ts';

describe('Login functionality', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should display an error message when password is incorrect', async () => {
        await LoginPage.login('standard_user', 'secret_saucettt');

        // Verify that an error message is displayed when password is incorrect
        const errorMessage = await browser.getTextOfElement(LoginPage.errorMessage);
        await expect(errorMessage).toEqual('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display an error message when user try to login without entering a username', async () => {
        await LoginPage.clickSubmitButton();

        // Verify that an error message is displayed when user clicks login button without entering a username
        const errorMessage = await browser.getTextOfElement(LoginPage.errorMessage);
        await expect(errorMessage).toEqual('Epic sadface: Username is required');
    });

    it('should display an error message when user try to login without entering a password', async () => {
        await LoginPage.typeUsername('standard_user');
        await LoginPage.clickSubmitButton();

        // Verify that an error message is displayed when user clicks login button without entering a password
        const errorMessage = await browser.getTextOfElement(LoginPage.errorMessage);
        await expect(errorMessage).toEqual('Epic sadface: Password is required');
    });

    it('should allow the user to login when entering valid credentials', async () => {
        await LoginPage.login(process.env.USERNAME, process.env.PASSWORD);

        // Verify that user is logged in successfully after entering valid credentials and is redirected to inventory/products page
        const urlAfterLogin = await browser.getRelativeUrl();
        await expect(urlAfterLogin).toEqual('/inventory.html');
        const productTitle = await browser.verifyIfElementIsDisplayed(ProductsPage.titleSelector);
        expect(productTitle).toBeTruthy();
        const productTitleTtext = await browser.getTextOfElement(ProductsPage.titleSelector);
        expect(productTitleTtext).toEqual('Products');
    });

});

