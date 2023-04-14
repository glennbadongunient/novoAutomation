import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/unientWebsite-page/staging/LoginPage";
import { Common } from "../pages/unientWebsite-page/staging/Common";

test.use({
    // screenshot: 'only-on-failure',
    // launchOptions:{slowMo: 2000},
    // viewport: {width:1920,height:1080},
    headless: false
});

test('login unient website', async({ page }) => {
    const loginPage = new LoginPage(page);
    const common = new Common(page);

    await loginPage.goto();
    await loginPage.login("unienttest", "Unient1234");
    await loginPage.closePage();
});

test('open all pages', async({ page }) => {
    const loginPage = new LoginPage(page);
    const common = new Common(page);
    
    const homepageh1 = "Your Versatile Partner for Better Offshoring";
    const teamsh1 = "Flexible High Quality Offshore Team Solutions";
    const infotechh1 = "The Right Solution, Delivered The Right Way";
    const creativesh1 = "High-Impact Design and Creative Solutions for Any Business";
    const bpoh1 = "Our Business Process Outsourcing Advantage: Operational Excellence with a Human Approach";
    const aboutUsh1 = "At Unient, We Create Value and Deliver Results ";
    const blogh1 = "Unient: Unveiling Entrinsic Technology’s New Identity";

    await loginPage.goto();
    await loginPage.login("unienttest", "Unient1234");

    const xButton = page.locator("//button[contains(@class, 'btn-close') and text()='x']");
    await common.clickElement("//a[@href='/teams/' and @class='nav-link']");
    await xButton.click();
    expect.soft(page.locator("//h1[text()='"+teamsh1+"']").textContent()).toBe(teamsh1);
    console.log(page.locator("//h1[text()='"+teamsh1+"']").textContent())
    console.log(teamsh1);

    // await common.clickElement("//a[@href='/infotech/' and @class='nav-link']");
    // await xButton.click();
    // expect.soft(page.locator("//h1[text()='"+infotechh1+"']").textContent()).toBe(infotechh1);

    // await common.clickElement("//a[@href='/creatives/' and @class='nav-link']");
    // await xButton.click();
    // expect.soft(page.locator("//h1[text()='"+creativesh1+"']").textContent()).toBe(creativesh1);

    // await common.clickElement("//a[@href='/bpo/' and @class='nav-link']");
    // await xButton.click();
    // expect.soft(page.locator("//h1[text()='"+bpoh1+"']").textContent()).toBe(bpoh1);

    // await common.clickElement("//a[@href='/about-us/' and @class='nav-link']");
    // await xButton.click();
    // expect.soft(page.locator("//h1[text()='"+aboutUsh1+"']").textContent()).toBe(aboutUsh1);

    // await common.clickElement("//a[@href='/blog/' and @class='nav-link']");
    // await xButton.click();
    // expect.soft(page.locator("//h1[text()='"+blogh1+"']").textContent()).toBe(blogh1);

    // await common.clickElement("//a[@href='/' and @class='navbar-brand']");
    // await xButton.click();
    // expect.soft(page.locator("//h1[text()='"+homepageh1+"']").textContent()).toBe(homepageh1);

    await loginPage.closePage();
});