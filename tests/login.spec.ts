import { test, expect } from '@playwright/test';
import {LoginPage} from '../page/loginPage'
import {LogOutPage} from '../page/logoutPage'
import { chromium } from '@playwright/test'

test.beforeEach(async ({page}) => {
    // const browser = await chromium.launch({ headless: false });
    // page = await browser.newPage();
    // await page.goto('https://practicetestautomation.com/practice-test-login');
    await page.goto('/practice-test-login');
})

test.describe('Test log in', () => {
    const validCredentials = ['student', 'Password123'];
    const successfullyLoggedInURL = 'https://practicetestautomation.com/logged-in-successfully/';
    

    test('Test log in functionality with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.logIn(validCredentials[0], validCredentials[1]);
        await loginPage.clickSubmitLoginButton();

        await expect(page).toHaveURL(successfullyLoggedInURL);

        // const logOutButtonIsVisible = await loginPage.isLogOutButtonVisible();
        // expect(logOutButtonIsVisible).toBe(true);
    })
    
})
test.describe('Test log out', () => {
    
    const successfullyLoggedInURL = 'https://practicetestautomation.com/logged-in-successfully/';
  
    test('Test log out', async ({page}) => {
        await page.goto(successfullyLoggedInURL)
        const logOutPage = new LogOutPage(page)
        await logOutPage.clickLogOut();
        await expect(page.locator("#login > h2")).toHaveText(/Test login/);
        
        
    })
})