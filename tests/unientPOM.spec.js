import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/unientSite-page/LoginPage";



test.use({
launchOptions: { slowMo: 1000 },
 headless: false

});


//action Login 
test('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('unienttest','Unient1234');



});