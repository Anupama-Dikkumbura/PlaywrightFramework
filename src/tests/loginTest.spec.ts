import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('tset', async({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('anupamadikkubura@gmail.com');
    await loginPage.fillPassword('Test@123');

    const homePage =  await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})