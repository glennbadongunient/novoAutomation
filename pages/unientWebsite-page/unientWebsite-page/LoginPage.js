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
        await usernameField.fill('unienttest');

        //Enter Password field
        const passwordfield = await this.page.getByLabel('Password');
        await password.fill('Unient1234');

        //Click Login button
        const loginButton = await this.page.getByRole('button');
        await loginButton.click();

        //Click Accept All
        const acceptAll = await this.page.getByRole('button');
        await acceptAll.click();
        
    }
    async close() {
        await this.page.close();
    
}
}
