import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/unientSite-page/LoginPage";
import { HomePage } from "../pages/unientSite-page/Homepage";

test.use({
    launchOptions:{slowMo: 1000},
    headless: false
});

test('Unient if pages are accessible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const Homepage = new HomePage(page);
    await loginPage.goto();
    await loginPage.login('unienttest', 'Unient1234');

    //Verify that page is accesible by checking that the H1 is present
    //await expect(Homepage.header).toHaveText("Your Versatile Partner for Better Offshoring");

    //Verify that page is accesible by checking if the Unient Logo is visible
    await expect(Homepage.logo).toBeVisible();

});







