import Page from './Page.ts';

class LoginPage extends Page {

    username = 'username';
    password = 'password';
    loginButton = 'login-button';
    errorMessage = 'error';

    public async typeUsername(username: string) {
        const usernameSelector = await browser.getElement(this.username);
        await usernameSelector.setValue(username);
    }

    public async typePassword(password: string) {
        const passwordSelector = await browser.getElement(this.password);
        await passwordSelector.setValue(password);
    }

    public async clickSubmitButton() {
        const loginButton = await browser.getElement(this.loginButton);
        await loginButton.click();
    }

    public async login(username: string, password: string) {
        await this.typeUsername(username);
        await this.typePassword(password);
        await this.clickSubmitButton();
    }

    public open() {
        return super.open();
    }

}

export default new LoginPage();
