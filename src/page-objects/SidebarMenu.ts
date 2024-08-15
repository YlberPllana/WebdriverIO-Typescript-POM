import { $ } from '@wdio/globals';
import Page from './Page.ts';

class SidebarMenu extends Page {

    hamburgerMenuSelector = '#react-burger-menu-btn';
    allItemsSelector = 'inventory-sidebar-link';
    aboutSelector = 'about-sidebar-link';
    logoutSelector = 'logout-sidebar-link';
    appStateSelector = 'reset-sidebar-link';

    public async openSidebarMenu() {
        const hamburgerMenu = $(this.hamburgerMenuSelector);
        await hamburgerMenu.click();
    }

    public async navigateToAllItems() {
        await this.openSidebarMenu();
        const allItems = await browser.getElement(this.allItemsSelector);
        await allItems.waitForClickable();
        await allItems.click();
    }

    public async navigateToAbout() {
        await this.openSidebarMenu();
        const about = await browser.getElement(this.aboutSelector);
        await about.waitForClickable();
        await about.click();
    }

    public async logout() {
        await this.openSidebarMenu();
        const logoutButton = await browser.getElement(this.logoutSelector);
        await logoutButton.waitForClickable();
        await logoutButton.click();
    }

    public async resetAppState() {
        await this.openSidebarMenu();
        const appState = await browser.getElement(this.appStateSelector);
        await appState.waitForClickable();
        await appState.click();
    }

};

export default new SidebarMenu();