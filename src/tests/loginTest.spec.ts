import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
import logger from "../utils/LoggerUtil";

test('successful login', async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    const homePage =  await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
    logger.info('Test for successful login is completed');
})

