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
            getRelativeUrl(): Promise<string>;
            getTextOfElement: (selector: string) => Promise<string>;
            login(username: string, password: string): Promise<void>;
            verifyIfElementIsDisplayed: (selector: string) => Promise<boolean>;
        }
    }
}
// environment.d.ts

declare namespace NodeJS {
    interface ProcessEnv {
        USERNAME: string;
        PASSWORD: string;
        // Add other environment variables here
    }
}
