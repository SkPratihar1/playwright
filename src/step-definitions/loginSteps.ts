import { Given, When,Then ,setDefaultTimeout} from '@cucumber/cucumber';
import { Page, chromium } from 'playwright';

let page: Page;
setDefaultTimeout(60 * 1000 * 2)

Given(`I am on the login page`, async function () {
    const browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login');
});

When(`I enter my username {string} and password {string}`, async function (username: string, password: string) {
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
});

When(`I click the login button`, async function () {
    await page.waitForSelector('#submit');
    await page.click('#submit');
});
Then('I should be logged in successfully', async function(){
    await page.waitForSelector('div.post-header h1', { timeout: 30000 });
});