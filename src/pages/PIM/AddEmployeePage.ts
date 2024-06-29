import { Page, expect, Locator} from "@playwright/test";
import EmployeeDetailsPage from "./EmployeeDetailsPage";
import logger from "../../utils/LoggerUtil";

export default class AddEmployeePage{
    private readonly page:Page;
    private readonly firstNameTextField: Locator;
    private readonly middleNameTextField: Locator;
    private readonly lastNameTextField: Locator;
    private readonly employeeIdTextField: Locator;
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameTextField = page.locator('input[name="firstName"]');
        this.middleNameTextField = page.locator('input[name="middleName"]');
        this.lastNameTextField = page.locator('input[name="lastName"]');
        this.saveButton = page.locator('//button[normalize-space()="Save"]');
        this.cancelButton = page.locator('//button[normalize-space()="Cancel"]');
    }

    async fillFirstName(firstName: string){
        await this.firstNameTextField.fill(firstName);
        logger.info(`Filled the first name as ${firstName}`);
    }

    async fillMiddleName(middleName: string){
        await this.middleNameTextField.fill(middleName);
        logger.info(`Filled the middle name as ${middleName}`);
    }

    async fillLastName(lastName: string){
        await this.lastNameTextField.fill(lastName);
        logger.info(`Filled the last name as ${lastName}`);
    }

    async clickSaveButton(){
        await this.saveButton.click();
        logger.info("Clicked on Save button");
        return new EmployeeDetailsPage(this.page);
    }

    async clickCancelButton(){
        await this.cancelButton.click();
    }

}