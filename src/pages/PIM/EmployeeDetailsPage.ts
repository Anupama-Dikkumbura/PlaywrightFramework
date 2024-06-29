import { Page, expect, Locator } from "@playwright/test";

export default class EmployeeDetailsPage{
    private readonly page:Page;

    constructor(page: Page) {
        this.page = page;
    }


}