import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/unientWebsite-page/unientWebsite-page";



test.use({
    launchOptions: { slowMo: 1000 },
    headless: false

});


//Login 
test('Login', async ({ page }) => {
    const LoginPage = new LoginPage (page);
 
}
)