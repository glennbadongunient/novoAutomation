import { Page, expect, waitForLoadState } from "@playwright/test";

export class LoginPage {
    constructor(page){
        this.page = page;
    }

    async goto(){
        await this.page.goto("https://unienttimesheetfe.azurewebsites.net/timesheet");
        await this.page.waitForLoadState('networkidle');
    }

    async login(username, password) {
        const usernameField = await this.page.locator("#i0116");
        await usernameField.fill(username);
        
        const nextButton = await this.page.locator("//input[contains(@type, 'submit') and @id='idSIButton9']");
        await nextButton.click();
        await this.page.waitForLoadState('networkidle');
        
        const passwordField = await this.page.locator("#i0118");
        await passwordField.fill(password);
        // await this.page.pause();

        const signInButton = await this.page.locator("//input[@id='idSIButton9' and @type='submit']");
        await signInButton.click();
        await this.page.waitForLoadState('networkidle');

        const noButton = await this.page.locator('#idBtn_Back');
        await noButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async pause() {
        await this.page.pause();
    }
}