import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../pages/unientWebsite-page/dev/LoginPage";
import { Common } from "../../../pages/unientWebsite-page/dev/Common";

test.use({
    headless: true
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

    await loginPage.login("dev");

    const unientLogo = "#home";
    const teamsButton = "#buildYourTeam";
    const infotechButton = "#ourServices";
    const creativesButton = "#whyUnient";
    const bpoButton = "#insights";
    const aboutusButton = "#careers";
    const blogButton = "#contactUs";
    
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

    await loginPage.login("dev");

    // const xButton = page.locator("//button[contains(@class, 'btn-close') and text()='x']");
    // await xButton.click();
    // await page.pause();

    // Get the element handle
    const elementHandle = await page.$("//nav[@id='navbar_top2']");

    // // Get the bounding box of the element
    // const boundingBox = await elementHandle.boundingBox();

    // Get the computed style of the element
    const computedStyle = await page.evaluate((element) => {
    return window.getComputedStyle(element);
    }, elementHandle);

    // Validate the position using the computed style and bounding box
    expect.soft(computedStyle.position).toBe('fixed');
    console.log("position is %s", computedStyle.position);
    expect.soft(computedStyle.top).toBe('70px');
    console.log("top is %s", computedStyle.top);
    expect.soft(computedStyle.right).toBe('0px');
    console.log("right is %s", computedStyle.right);
    expect.soft(computedStyle.left).toBe('0px');
    console.log("left is %s", computedStyle.left);
    expect.soft(computedStyle.zIndex).toBe('99999');
    console.log("zIndex is %s", computedStyle.zIndex);

    await loginPage.closePage();
});

test('1851 Validate texts in menu bar is using the correct font style', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("dev");

    const listOfMenuBarButtonsIDs = ["home", "buildYourTeam", "ourServices", "whyUnient", "insights", "careers", "contactUs"];
    for (let i in listOfMenuBarButtonsIDs) {

        const buttonName = listOfMenuBarButtonsIDs[i];
        const elementHandle = await page.$("//a[@id='"+listOfMenuBarButtonsIDs[i]+"']");

        // Get the bounding box of the element
        const forTextColor = await elementHandle.getProperty('color');
        const colorValue = await forTextColor.jsonValue();
        // const hexColor = colorValue.toString(16).padStart(6, '0');

        // Get the computed style of the element
        const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element);
        }, elementHandle);

        console.log("%s font-style is %s", buttonName, computedStyle.fontStyle);
        expect.soft(computedStyle.fontStyle).toBe("Open Sans");
        console.log("%s text-color is %s", buttonName, colorValue);
        expect.soft(colorValue).toBe("#FFFFFF");
    }
    await loginPage.closePage();
});

test('1852 Validate texts in menu bar is using the correct font size', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("dev");

    const listOfMenuBarButtonsIDs = ["home", "buildYourTeam", "ourServices", "whyUnient", "insights", "careers", "contactUs"];
    for (let i in listOfMenuBarButtonsIDs) {
        const urlToOpen = await page.$("//a[@id='"+listOfMenuBarButtonsIDs[i]+"']");
        
        // Get the computed style of the element
        const computedStyle = await page.evaluate((element) => {
        return window.getComputedStyle(element);
        }, urlToOpen);

        console.log("%s font-size is %s", i, computedStyle.fontSize);
        expect.soft(computedStyle.fontSize).toBe("20px");
    }

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

    // await loginPage.goto();
    await loginPage.login("dev");

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