import { Page, expect, waitForLoadState } from "@playwright/test";

export class LoginPage {
    constructor(page){
        this.page = page;
    }

    async goto(){
        await this.page.goto("https://unienttimesheetfe.azurewebsites.net/timesheet");
        await this.page.locator("#i0116");
    }

    async login(username, password) {
        const usernameField = this.page.locator("#i0116");
        await usernameField.fill(username);
        
        const nextButton = this.page.locator("//input[contains(@type, 'submit') and @id='idSIButton9']");
        await nextButton.click();
        // await this.page.waitForLoadState('networkidle');
        
        const passwordField = this.page.locator("#i0118");
        await passwordField.fill(password);

        const signInButton = this.page.locator("//input[@id='idSIButton9' and @type='submit']");
        await signInButton.click();
        // await this.page.waitForLoadState('networkidle');

        const noButton = this.page.locator('#idBtn_Back');
        await noButton.click();

        await this.page.waitForSelector("//div[contains(@class,'md:pl-2 text-center text-xl font-semibold') and text()=' Timesheet ']");
    }

    async pause() {
        await this.page.pause();
    }

    async closePage(){
        await this.page.close();
    }
}