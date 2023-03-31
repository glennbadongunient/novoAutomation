const { test } = require('@playwright/test');
const fs = require('fs');
const url = 'https://stage-unientwww.euwest01.umbraco.io/blog/covid-and-offshore-outsourcing/';

test('getting page source', async ({ page }) => {
    
    // Open url and login
    await page.goto(url);
    await page.locator("//input[contains(@class, 'form-control') and @id='loginModel_Username']").fill('unienttest');
    await page.locator("//input[contains(@class, 'form-control') and @id='loginModel_Password']").fill('Unient1234');
    await page.locator("//button[contains(@class, 'btn btn-primary') and text()='Log in']").click();
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('xpath=//h1');

    // Get the full page source
    const pageSource = await page.content();

    // Print page source to see right away if working
    console.log(pageSource);

    // Save page source to file
    fs.writeFileSync('pageSource.txt', pageSource);

    // close page
    await page.close();
});