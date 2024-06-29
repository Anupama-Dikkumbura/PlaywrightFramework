import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
import {decryptEnvFile, encryptEnvFile} from "../utils/EncryptEnvFile";
import {log} from "node:util";

test('test', async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));
    // await loginPage.fillUsername(process.env.userid!);
    // await loginPage.fillPassword(process.env.password!)

    const homePage =  await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})

