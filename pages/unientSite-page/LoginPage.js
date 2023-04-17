//import { Page, expect, waitForLoadState } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
    }


    async goto() {
        await this.page.goto("https://stage-unientwww.euwest01.umbraco.io/");
        await this.page.waitForLoadState('networkidle');
    }

    async login(username, password) {
        //Enter Username Field
        const usernameField = await this.page.getByLabel('User name');
        await usernameField.fill(username);

        //Enter Password field
        const passwordField = await this.page.getByLabel('Password');
        await passwordField.fill(password);

        //Click Login button
        const loginButton = await this.page.getByRole('button');
        await loginButton.click();


        //Click Accept All
        const acceptAll = await this.page.locator("button[id='cookie-accept']");
        await acceptAll.click();

        
        //Automatically close the page
         await this.page.close();


    }
}

