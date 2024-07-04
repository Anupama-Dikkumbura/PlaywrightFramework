import { test } from '@playwright/test';
import LoginPage from "../pages/LoginPage";
import {decrypt} from "../utils/CryptojsUtil";
import logger from "../utils/LoggerUtil";
import HomePage from "../pages/HomePage";

const authFile = 'src/config/auth.json';

test.skip(`saving auth file`, async({page})=> {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
    await homePage.expectedPageHeadingCheck();
    await page.context().storageState({path: authFile});
    logger.info('Auth file saved successfully');
});

test('login using auth file', async ({browser})=>{
    const context = await browser.newContext({storageState: authFile});
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");

    const homePage =  new HomePage(page);
    //await homePage.expectedPageHeadingCheck();
    await homePage.expectServiceTitleToBeVisible();
    logger.info("successfully logged in with the auth file");

})