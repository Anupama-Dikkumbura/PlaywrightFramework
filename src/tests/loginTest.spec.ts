import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { decrypt, encrypt } from '../utils/CryptojsUtil';
import logger from "../utils/LoggerUtil";
// @ts-ignore
import employeeData from "../testdata/employees.json";
import {convertCsvFileToJsonFile} from "../utils/CsvToJsonUtil";

// for(const employee of employeeData){
//     test(`successful login ${employee.firstName}`, async({page})=>{
//         const loginPage = new LoginPage(page);
//         await loginPage.navigateToLoginPage();
//         await loginPage.fillUsername(decrypt(process.env.userid!));
//         await loginPage.fillPassword(decrypt(process.env.password!));
//         const homePage =  await loginPage.clickLoginButton();
//         await homePage.expectServiceTitleToBeVisible();
//         logger.info('Test for successful login is completed');
//
//         // const employeeInformationPage = await homePage.clickPimMenuItem();
//         // const addEmployeePage = await employeeInformationPage.clickAddUserButton();
//         //
//         // await addEmployeePage.fillFirstName(employee.firstName);
//         // await addEmployeePage.fillMiddleName(employee.middleName);
//         // await addEmployeePage.fillLastName(employee.lastName);
//         // const employeeDetailsPage = await addEmployeePage.clickSaveButton();
//     });
// }

// test(`successful login`, async({page})=> {
//     const loginPage = new LoginPage(page);
//     await loginPage.navigateToLoginPage();
//     await loginPage.fillUsername(decrypt(process.env.userid!));
//     await loginPage.fillPassword(decrypt(process.env.password!));
//     const homePage = await loginPage.clickLoginButton();
//     await homePage.expectServiceTitleToBeVisible();
//     await homePage.expectedPageHeadingCheck();
//     logger.info('Test for successful login is completed');
// });

test.skip('demo faker', async({page})=>{
    console.log("Test");
})