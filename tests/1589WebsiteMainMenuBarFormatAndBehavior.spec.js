import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/unientWebsite-page/staging/LoginPage";
import { Common } from "../pages/unientWebsite-page/staging/Common";

test.use({
    // screenshot: 'only-on-failure',
    // launchOptions:{slowMo: 2000},
    // viewport: {width:1920,height:1080},
    headless: false
});

// test('login unient website', async({ page }) => {
//     const loginPage = new LoginPage(page);
//     const common = new Common(page);

//     await loginPage.goto();
//     await loginPage.login("unienttest", "Unient1234");
//     await loginPage.closePage();
// });

test('1848 Validate all buttons are existing', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const common = new Common(page);

    await loginPage.login("unienttest", "Unient1234");

    const unientLogo = "//a[@class='navbar-brand']/img[@src='/assets/img/logo/Unient-Logo-White.svg']";
    const teamsButton = "//ul[@class='navbar-nav']/li[@class='nav-item']/a[@href='/teams/']";
    const infotechButton = "//ul[@class='navbar-nav']/li[@class='nav-item']/a[@href='/infotech/']";
    const creativesButton = "//ul[@class='navbar-nav']/li[@class='nav-item']/a[@href='/creatives/']";
    const bpoButton = "//ul[@class='navbar-nav']/li[@class='nav-item']/a[@href='/bpo/']";
    const aboutusButton = "//ul[@class='navbar-nav']/li[@class='nav-item']/a[@href='/about-us/']";
    const blogButton = "//ul[@class='navbar-nav']/li[@class='nav-item']/a[@href='/blog/']";
    
    expect.soft(Boolean(page.locator(unientLogo)) === true);
    expect.soft(Boolean(page.locator(teamsButton)) === true);
    expect.soft(Boolean(page.locator(infotechButton)) === true);
    expect.soft(Boolean(page.locator(creativesButton)) === true);
    expect.soft(Boolean(page.locator(bpoButton)) === true);
    expect.soft(Boolean(page.locator(aboutusButton)) === true);
    expect.soft(Boolean(page.locator(blogButton)) === true);

    await loginPage.closePage();
});

test('1850 Validate menu bar\'s position', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const common = new Common(page);

    await loginPage.login("unienttest", "Unient1234");

    // const xButton = page.locator("//button[contains(@class, 'btn-close') and text()='x']");
    // await xButton.click();
    // await page.pause();

    // Get the element handle
    const elementHandle = await page.$("//nav[@class='navbar navbar-expand-lg fixed-top navbar-light navbar-link-white']");

    // Get the bounding box of the element
    const boundingBox = await elementHandle.boundingBox();

    // Get the computed style of the element
    const computedStyle = await page.evaluate((element) => {
    return window.getComputedStyle(element);
    }, elementHandle);

    // Validate the position using the computed style and bounding box
    expect.soft(computedStyle.position === 'fixed');
    console.log(computedStyle.position);
    expect.soft(computedStyle.right === '0px');
    console.log(computedStyle.right);
    expect.soft(computedStyle.left === '0px');
    console.log(computedStyle.left);
    expect.soft(computedStyle.zIndex === '1030px');
    console.log(computedStyle.zIndex);

    await loginPage.closePage();
});

test('open all pages', async({ page }) => {
    // this will flip thru pages and check on H1 and then check on meta description and meta keywords
    const loginPage = new LoginPage(page);
    const common = new Common(page);
    
    const homepageh1 = "Your Versatile Partner for Better Offshoring";
    const teamsh1 = "Flexible High Quality Offshore Team Solutions";
    const infotechh1 = "The Right Solution, Delivered The Right Way";
    const creativesh1 = "High-Impact Design and Creative Solutions for Any Business";
    const bpoh1 = "Our Business Process Outsourcing Advantage: Operational Excellence with a Human Approach";
    const aboutUsh1 = "At Unient, We Create Value and Deliver Results ";
    const blogh1 = "Unient: Unveiling Entrinsic Technology\’s New Identity";

    await loginPage.goto();
    await loginPage.login("unienttest", "Unient1234");

    const xButton = page.locator("//button[contains(@class, 'btn-close') and text()='x']");
    await common.clickElement("//a[@href='/teams/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+teamsh1+"']").innerText() === teamsh1);

    await common.clickElement("//a[@href='/infotech/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+infotechh1+"']").innerText() === infotechh1);

    await common.clickElement("//a[@href='/creatives/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+creativesh1+"']").innerText() === creativesh1);

    await common.clickElement("//a[@href='/bpo/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+bpoh1+"']").innerText() === bpoh1);

    await common.clickElement("//a[@href='/about-us/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+aboutUsh1+"']").innerText() === aboutUsh1);

    await common.clickElement("//a[@href='/blog/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+blogh1+"']").innerText() === blogh1);

    await common.clickElement("//a[@href='/' and @class='navbar-brand']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+homepageh1+"']").innerText() === homepageh1);

    await loginPage.closePage();
});