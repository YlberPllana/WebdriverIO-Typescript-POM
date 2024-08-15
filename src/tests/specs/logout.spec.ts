import LoginPage from '../../page-objects/Login.ts';
import SidebarMenu from '../../page-objects/SidebarMenu.ts';

describe('Logout from application', () => {

    beforeEach(async () => {
        await browser.login(process.env.USERNAME, process.env.PASSWORD);
    });

    it('should allow the user to logout after successfully login', async () => {
        const urlAfterLogin = await browser.getRelativeUrl();
        await expect(urlAfterLogin).toEqual('/inventory.html');

        await SidebarMenu.logout();

        // Verify that is user is redirect to login page after logout by checking url
        const urlAfterLogout = await browser.getRelativeUrl();
        await expect(urlAfterLogout).toEqual('/');

        // Verify that user is redirected to login page after logout by checking if login button exist
        const loginButton = await browser.getElement(LoginPage.loginButton);
        await expect(loginButton).toBeDisplayed();
    });

});