import { Page } from 'playwright';

export class LoginPage {
  private page: Page;
  private logOutButton:any;

  constructor(page: Page) {
    this.page = page;
    this.logOutButton = page.getByText('Log out');
  }

  async navigateToLoginPage(url: string) {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    await this.page.fill('input[name="username"]', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('input[name="password"]', password);
  }

  async clickLoginButton() {
    await this.page.click('button[type="submit"]');
  }
  async isLogOutButtonVisible() {
    const logOutButton = this.logOutButton;
    return await logOutButton.isVisible();
}
  async waitForErrorMessage() {
    await this.page.waitForSelector('.error-message');
  }

  async waitForDashboard() {
    await this.page.waitForSelector('.dashboard');
  }
}