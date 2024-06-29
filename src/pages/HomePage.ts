import { Page, expect } from '@playwright/test';
import logger from "../utils/LoggerUtil";
import exp = require("node:constants");

export default class HomePage{

    private readonly expectedPageTitle = "Swag Labs";

    constructor(private page: Page){

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