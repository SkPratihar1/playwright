export class LogOutPage {
    private page: any;
    private logOutButton:any;

    constructor(page: any) {
        this.page = page;
        this.logOutButton = page.locator('//*[@id="loop-container"]/div/article/div[2]/div/div/div/a');
    }
    async clickLogOut() {
        const logOutButton = this.logOutButton;
        await logOutButton.click();
    }
    
}
