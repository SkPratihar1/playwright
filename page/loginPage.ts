export class LoginPage {
    private page: any;
    private usernameInputField: any;
    private passwordInputField: any;
    private submitButton: any;
    private logOutButton:any;

    constructor(page: any) {
        this.page = page;
        this.usernameInputField = page.locator('input[id="username"]');
        this.passwordInputField = page.locator('input[id="password"]');
        this.submitButton = page.locator('button[id="submit"]');
        this.logOutButton = page.getByText('Log out');
    }
    async fillUsername(username) {
        const usernameInputField = this.usernameInputField;
        await usernameInputField.fill(username);
    }

    async fillPassword(password) {
        const passwordInputField = this.passwordInputField;
        await passwordInputField.fill(password);
    }
    async logIn(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }
    async clickSubmitLoginButton() {
        const submitButton = this.submitButton;
        await submitButton.click();
    }
    async isLogOutButtonVisible() {
        const logOutButton = this.logOutButton;
        return await logOutButton.isVisible();
    }
}
