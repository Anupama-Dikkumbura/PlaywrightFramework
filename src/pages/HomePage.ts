import {Page, expect, Locator} from '@playwright/test';
import logger from "../utils/LoggerUtil";
import exp = require("node:constants");
import UserManagementPage from "./Admin/UserManagementPage";
import EmployeeInformationPage from "./PIM/EmployeeInformationPage";

export default class HomePage{

    private readonly page: Page;
    private readonly adminMenuItem: Locator;
    private readonly pimMenuItem: Locator;
    private readonly expectedPageTitle = "OrangeHRM";
    private readonly expectedPageHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.adminMenuItem = page.locator('//a[contains(@class, "oxd-main-menu-item") and .//span[text()="Admin"]]');
        this.pimMenuItem = page.locator('//a[contains(@class, "oxd-main-menu-item") and .//span[text()="PIM"]]');
        this.expectedPageHeading = page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module[data-v-7b563373][data-v-f0c5131f]');
    }

    async clickAdminMenuItem(){
        await this.adminMenuItem.click();
        return new UserManagementPage(this.page);
    }

    async clickPimMenuItem(){
        await this.pimMenuItem.click();
        return new EmployeeInformationPage(this.page);
    }

    async expectedPageHeadingCheck (){
        await expect(this.expectedPageHeading).toHaveText("Dashboard");
    }

    async expectServiceTitleToBeVisible(){
        const title = await this.page.title().catch((error)=>{
            logger.error(`Error locating the page title: ${error}`);
            throw error;
        });
        logger.info(`Page title retrieved: ${title}`);

        try {
            expect(title).toBe(this.expectedPageTitle);
            logger.info("Page title matches the expected title.");
        } catch (error) {
            logger.error(`Page title does not match the expected title: ${error}`);
            throw error;
        }
    }
}