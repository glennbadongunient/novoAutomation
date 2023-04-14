import { Page, expect, waitForLoadState } from "@playwright/test";

export class LoginPage {
        constructor(page){
        this.page = page;
    }

    async goto(){
        await this.page.goto("https://stage-unientwww.euwest01.umbraco.io/");
        await this.page.locator("#loginModel_Username");
    }

    async login(username, password) {
        const usernameField = this.page.locator("#loginModel_Username");
        await usernameField.fill(username);
        
        const passwordField = this.page.locator("#loginModel_Password");
        await passwordField.fill(password);

        const loginButton = this.page.locator("//button[contains(@class, 'btn btn-primary') and text()='Log in']");
        await loginButton.click();
        // await this.page.waitForLoadState('networkidle');
        
        const xButton = this.page.locator("//button[contains(@class, 'btn-close') and text()='x']");
        await xButton.click();
        // await this.page.waitForLoadState('networkidle');

        await this.page.locator("//div[@class='container position-relative z-index-1']");

        // await this.page.locator("//div[contains(@class,'md:pl-2 text-center text-xl font-semibold') and text()=' Timesheet ']");
    }

    async closePage(){
        await this.page.close();
    }
}