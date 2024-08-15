import { $, browser } from '@wdio/globals';
import LoginPage from '../page-objects/Login.ts';

browser.addCommand('getElement', async function (selector: string) {
    return $(`[data-test="${selector}"]`);
});

browser.addCommand('getAllElements', async function (selector: string) {
    return $$(`[data-test="${selector}"]`);
});

browser.addCommand('getTextOfElement', async function (selector: string) {
    const element = await browser.getElement(selector);
    return element.getText();
});

browser.addCommand('verifyIfElementIsDisplayed', async function (selector: string) {
    const element = await browser.getElement(selector);
    return element.isDisplayed();
});

browser.addCommand('getRelativeUrl', async function (): Promise<string> {
    const baseUrl = await browser.getUrl();
    const pathname = new URL(baseUrl).pathname;
    return pathname;
});

browser.addCommand('login', async function (username: string, password: string): Promise<void> {
    await LoginPage.open();
    await LoginPage.login(username, password);
});

declare global {
    namespace WebdriverIO {
        interface Browser {
            getElement: (selector: string) => Promise<WebdriverIO.Element>;
            getAllElements: (selector: string) => Promise<WebdriverIO.Element>;
            getTextOfElement: (selector: string) => Promise<string>;
            verifyIfElementIsDisplayed: (selector: string) => Promise<boolean>;
            getRelativeUrl(): Promise<string>;
            login(username: string, password: string): Promise<void>;
        }
    }
}
