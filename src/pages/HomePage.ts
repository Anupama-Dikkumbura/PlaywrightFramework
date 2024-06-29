import { Page, expect } from '@playwright/test';

export default class HomePage{

    private readonly expectedPageTitle = "Swag Labs";

    constructor(private page: Page){

    }

    async expectServiceTitleToBeVisible(){
        const title = await this.page.title();
        expect(title).toBe(this.expectedPageTitle);
    }
}