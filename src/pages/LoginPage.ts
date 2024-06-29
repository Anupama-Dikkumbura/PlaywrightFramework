import {Page} from '@playwright/test';
import HomePage from './HomePage';
import logger from "../utils/LoggerUtil";

export default class LoginPage{
    private readonly usernameInputSelector = '#user-name';
    private readonly passwordInputSelector = '#password';
    private readonly loginButtonSelector = '#login-button';

    constructor(private page: Page){
        
    }

    async navigateToLoginPage(){
        await this.page.goto('/');
        logger.info('Navigated to https://www.saucedemo.com/v1/index.html');
    }

    async fillUsername(username: string){
        await this.page.locator(this.usernameInputSelector).fill(username);
        logger.info('Filled the username');
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordInputSelector).fill(password);
        logger.info('Filled the password');
    }

    async clickLoginButton(){
        await this.page.locator(this.loginButtonSelector).click().catch((error)=>{
            logger.error(`Error clicking login button: ${error}`);
            throw error;
        }).then(()=>logger.info('Clicked login button'))

        return new HomePage(this.page);
    }
}