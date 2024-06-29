import { Page, expect, Locator} from "@playwright/test";

export default class UserManagementPage{
    private readonly page:Page;
    private readonly addUserButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.addUserButton = page.locator('//button[normalize-space()="Add"]');
    }

    async clickAddUserButton(){
        await this.addUserButton.click();
    }
}