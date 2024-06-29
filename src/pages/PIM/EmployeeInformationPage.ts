import { Page, expect, Locator} from "@playwright/test";
import AddEmployeePage from "./AddEmployeePage";

export default class EmployeeInformationPage {
    private readonly page:Page;
    private readonly addEmployeeButton: Locator;


    constructor(page:Page) {
        this.page = page;
        this.addEmployeeButton = page.locator('//button[normalize-space()="Add"]');
    }

    async clickAddUserButton(){
        await this.addEmployeeButton.click();
        return new AddEmployeePage(this.page);
    }
}