import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/unientSite-page/LoginPage";
import { HomePage } from "../pages/unientSite-page/Homepage";



test.use({
launchOptions: { slowMo: 1000 },
 headless: false

});


//action Login 
test('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('unienttest','Unient1234');

    const HomePage = new HomePage(page);
    await HomePage.expect();



});

