import {Locator, Page} from '@playwright/test';
import HomePage from './HomePage';
import logger from "../utils/LoggerUtil";

export default class LoginPage{
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByRole('textbox', {name: 'username'});
        this.passwordInput = page.getByRole('textbox', {name: 'password'});
        this.loginButton = page.locator('button[type="submit"]');
    }

    async navigateToLoginPage(){
        await this.page.goto('/');
        logger.info('Navigated to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async fillUsername(username: string){
        await this.usernameInput.fill(username);
        logger.info('Filled the username');
    }

    async fillPassword(password: string){
        await this.passwordInput.fill(password);
        logger.info('Filled the password');
    }

    async clickLoginButton(){
        await this.loginButton.click().catch((error)=>{
            logger.error(`Error clicking login button: ${error}`);
            throw error;
        }).then(()=>logger.info('Clicked login button'))

        return new HomePage(this.page);
    }
}