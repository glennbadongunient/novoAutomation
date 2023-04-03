const { test, expect } = require('@playwright/test');
const fs = require('fs');
const url = 'https://stage-unientwww.euwest01.umbraco.io/blog/covid-and-offshore-outsourcing/';

test.beforeEach(async ({ page }) => {
    // This will fetch the whole page source
    
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

});

test.afterEach(async ({ page }) =>{

    // close page
    await page.close();

});

test('validate meta keywords', async ({ page }) => {

    const {evaluate} = require('@playwright/test');

    // Validating if meta keywords are the expected values
    const metaContent = await page.evaluate((name) => {
        const meta = document.querySelector(`meta[name="keywords"]`);
        const metCon = meta ? meta.getAttribute('content') : null;
        return metCon;
      }, 'description');

    const expectedContent = "Offshore Outsourcing, Outsourcing Industry, Offshore outsourcing industry, remote work, remote working, digital transformation, outsourcing business, outsourcing talent";
    // const message = metaContent === expectedContent
    //     ? 'Meta tag keywords matches expected value.'
    //     : 'Meta tag keywords does not match expected value.';
    // console.log(message);
    expect(metaContent).toEqual(expectedContent);
    fs.writeFileSync('keywords.txt', metaContent);

});
    
test('validate meta description', async ({ page }) => {

    const {evaluate} = require('@playwright/test');

    // Validating if meta description is the expected value
    const metaContent2 = await page.evaluate((name) => {
        const meta = document.querySelector(`meta[name="description"]`);
        const metCon = meta ? meta.getAttribute('content') : null;
        return metCon;
      }, 'description');

    const expectedContent2 = "COVID-19 affected numerous industries. Read this article to learn about the ways the pandemic impacted the offshore outsourcing industry.";
    // const message2 = metaContent2 === expectedContent2
    //     ? 'Meta tag description matches expected value.'
    //     : 'Meta tag description does not match expected value.';
    // console.log(message2);
    expect(metaContent2).toEqual(expectedContent2);
    fs.writeFileSync('description.txt', metaContent2);

});