import { test, expect } from '@playwright/test';

test.use({
    // screenshot: 'only-on-failure',
    launchOptions:{slowMo: 1000},
    // viewport: {width:1920,height:1080},
    headless: false
});

test.beforeEach( async ({ page }) => {
    const url = 'https://unienttimesheetfe.azurewebsites.net/timesheet';
    await page.goto(url);
    await page.locator("//input[@id='i0116']").isVisible();
    await page.locator("//input[@id='i0116']").type('auto-test@unient.biz');
    await page.locator("//input[@id='idSIButton9']").isVisible();
    await page.locator("//input[@id='idSIButton9']").click();
    await page.locator("//input[@id='i0118']").isVisible();
    await page.locator("//input[@id='i0118']").fill('vAr!bRaWRaCHe1e#7Dre')
    await page.locator("//input[@id='idSIButton9']").isVisible();
    await page.locator("//input[@id='idSIButton9']").click();
    await page.locator("//input[@id='idBtn_Back']").isVisible();
    await page.locator("//input[@id='idBtn_Back']").click();
    await page.goto(url);
    await page.locator("//span[contains(@class, 'font-bold text-4xl') and text()='Month View']").waitFor();
});

test.afterEach( async ({ page }) => {
    await page.close();
});

// TESTS
test('negative time', async ({ page }) => {
    // getting date today
    var date = new Date();
    var day_now = (date.getDate());
    var month_now = (date.getMonth())+1;
    var year_now = date.getFullYear();
    var date_now = month_now+"/"+day_now+"/"+year_now;
    var date_now_validation = year_now+"-"+month_now+"-"+day_now;
    // console.log(date_now);
    // console.log(date_now_validation);
    console.log("This is the date_now: %s",date_now);
    console.log("This is the date_now_validation: %s",date_now_validation);

    // Fill up form
    await page.locator("//button[@class='mat-focus-indicator fuse-mat-button-large justify-self-end bg-slate-800 text-white mat-flat-button mat-button-base']/span[@class='mat-button-wrapper']").click();
    await page.locator("//input[@id='mat-input-0']").fill(date_now);
    await page.locator("//input[@id='mat-input-1']").fill('09:00');
    await page.locator("//input[@id='mat-input-2']").fill('08:00');
    await page.locator("//input[@id='mat-input-3']").fill('[INTERNAL-Non-Billable-Admin_Administrative Task] ');
    await page.locator("//input[@id='mat-input-3']").press('Enter');
    await page.locator("//textarea[@id='mat-input-4']").fill('test note');
    await page.locator("//span[contains(@class, 'mat-button-wrapper') and text()='Add Time Entry']").click();
    
    // Validate error message is present
    expect.soft(page.getByText('Please enter End Time that\'s greater than Start Time.').isVisible({timeout: 5000}));

    // Validate text color
    const message_text = page.getByText('Please enter End Time that\'s greater than Start Time.');
    const text_color = await message_text.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("color")
    });
    console.log(text_color);
    expect(text_color).toBe("rgb(220, 38, 38)");
});

test('add and delete', async ({ page }) => {

    // SET SPEED TO 1 MILLISECOND
    // this.use({
    //     launchOptions:{
    //         slowMo: 1000
    //     }
    // });

    // GETTING TODAY'S DATE
    var date = new Date();
    var day_now = (date.getDate());
    var month_now = date.getMonth()+1;
    var year_now = date.getFullYear();
    var date_now = month_now+"/"+day_now+"/"+year_now;
    var date_now_validation = year_now+"-"+month_now+"-"+day_now;
    // console.log(date_now);
    // console.log(date_now_validation);

    // Fill up form
    await page.locator("//button[@class='mat-focus-indicator fuse-mat-button-large justify-self-end bg-slate-800 text-white mat-flat-button mat-button-base']/span[@class='mat-button-wrapper']").click();
    await page.locator("//input[@id='mat-input-0']").fill(date_now);
    await page.locator("//input[@id='mat-input-1']").fill('08:00');
    await page.locator("//input[@id='mat-input-2']").fill('09:00');
    await page.locator("//input[@id='mat-input-3']").fill('[INTERNAL-Non-Billable-Admin_Administrative Task] ');
    await page.locator("//input[@id='mat-input-3']").press('Enter');
    await page.locator("//textarea[@id='mat-input-4']").fill('test note');
    await page.locator("//span[contains(@class, 'mat-button-wrapper') and text()='Add Time Entry']").click();

    // VALIDATE IS TIME ENTRY IS CREATED AND VISIBLE
    expect.soft(page.getByText(date_now_validation).isVisible());
    console.log(page.locator("//div[text()='"+date_now_validation+"']").innerText);
    expect.soft(page.getByText("Total Hours: 1.00").isVisible());
    expect.soft(page.getByText('Admin_Administrative Task').first().isVisible());
    expect.soft(page.getByText('test notes').nth(1).isVisible());
    expect.soft(page.getByText('[INTERNAL-Non-Billable-Admin_Administrative Task] ').isVisible());
    expect.soft(page.getByText('08:00 AM - 09:00 AM').isVisible());
    expect.soft(page.locator("//div[contains(@class, 'flex-none w-15 text-center') and text() = '1.00']").isVisible());
    expect.soft(page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").isVisible());
    
    // if ( await page.locator("//div[@class='flex flex-col ...']/div[2]/div/mat-icon").isVisible() === true ){
    //     do {
    //         await page.locator("//div[@class='flex flex-col ...']/div[2]/div/mat-icon").click(),
    //         await page.getByRole('button', { name: 'Confirm' }).click()
    //     } while (await page.locator("//div[@class='flex flex-col ...']/div[2]/div/mat-icon").isVisible()); 
    //     console.log("Done cleaning, Master!");
    // } else {
    //     // pass
    // }

    if ( await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").isVisible() === true ){
        do {
            await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").click();
            await page.locator("//span[text()=' Confirm ']").click();
        } while (await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").isVisible()); 
        console.log("Done cleaning, Master!");
    } else {
        // pass
    }
    
    await page.waitForLoadState('networkidle');
    // await page.screenshot({ path: '..\\screenshots\\TimeEntriesNotVisibleScreenshot.png', fullPage: true });

    // AFTER DELETING, VALIDATE ELEMENTS ARE NOT VISIBLE
    await expect.soft(page.locator("//div[text()='"+date_now_validation+"']")).toBeHidden();
    // await expect.soft(page.getByText(date_now_validation)).toBeHidden();
    await expect.soft(page.getByText("Total Hours: 1.00")).toBeHidden();
    await expect.soft(page.getByText('Admin_Administrative Task').first()).toBeHidden();
    await expect.soft(page.getByText('test notes').nth(1)).toBeHidden();
    await expect.soft(page.getByText('[INTERNAL-Non-Billable-Admin_Administrative Task] ')).toBeHidden();
    await expect.soft(page.getByText('08:00 AM - 09:00 AM')).toBeHidden();
    await expect.soft(page.locator("//div[contains(@class, 'flex-none w-15 text-center') and text() = '1.00']")).toBeHidden();
    expect.soft(page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").toBeHidden());
    // await expect.soft(page.locator("/html/body/app-root/layout/classy-layout/div/div[2]/time-entry/div/div/div[2]/month-group[1]/div/div[2]/div/table/tbody/tr[1]/td[2]/div/div[2]/div[6]/mat-icon")).toBeHidden();
});

test('time overlap', async({ page }) => {
    // GETTING TODAY'S DATE
    var date = new Date();
    var day_now = (date.getDate());
    var month_now = date.getMonth()+1;
    var year_now = date.getFullYear();
    var date_now = month_now+"/"+day_now+"/"+year_now;
    var date_now_validation = year_now+"-"+month_now+"-"+day_now;

    console.log(date_now);
    console.log(date_now_validation);

    // FILL UP FORM AND SAVE
    await page.getByRole('button', { name: 'New Time Entry' }).click();
    await page.getByLabel('Choose a date').press('Control+a');
    await page.getByLabel('Choose a date').fill(date_now);
    // await page.pause();
    await page.getByLabel('Start Time').fill('08:00');
    await page.getByLabel('End Time').fill('09:00');
    await page.getByLabel('End Time').press('Tab');
    // await page.pause();
    await page.getByRole('combobox', { name: 'Number' }).type('a');
    await page.getByRole('combobox', { name: 'Number' }).press('Enter');
    await page.getByRole('combobox', { name: 'Number' }).press('Tab');
    // await page.pause();
    await page.getByLabel('Notes').type('test note');
    await page.getByLabel('Notes').press('Tab');
    // await page.pause();
    expect.soft(page.getByRole('button', { name: 'Add Time Entry' }).isVisible());
    expect.soft(page.getByRole('button', { name: 'Add Time Entry' }).isEnabled());
    // await page.pause();
    await page.locator("//span[contains(@class, 'mat-button-wrapper') and text()='Add Time Entry']").press('Enter');
    // await page.getByRole('button', { name: 'Add Time Entry' }).press('Enter');

    // FILL UP FORM AND SAVE
    await page.getByRole('button', { name: 'New Time Entry' }).click();
    await page.getByLabel('Choose a date').press('Control+a');
    await page.getByLabel('Choose a date').fill(date_now);
    // await page.pause();
    await page.getByLabel('Start Time').fill('08:00');
    await page.getByLabel('End Time').fill('09:00');
    await page.getByLabel('End Time').press('Tab');
    // await page.pause();
    await page.getByRole('combobox', { name: 'Number' }).type('a');
    await page.getByRole('combobox', { name: 'Number' }).press('Enter');
    await page.getByRole('combobox', { name: 'Number' }).press('Tab');
    // await page.pause();
    await page.getByLabel('Notes').type('test note');
    await page.getByLabel('Notes').press('Tab');
    // await page.pause();
    expect.soft(page.getByRole('button', { name: 'Add Time Entry' }).isVisible());
    expect.soft(page.getByRole('button', { name: 'Add Time Entry' }).isEnabled());
    // await page.pause();
    await page.locator("//span[contains(@class, 'mat-button-wrapper') and text()='Add Time Entry']").press('Enter');
    // await page.getByRole('button', { name: 'Add Time Entry' }).press('Enter');

    // Validate error message is present
    await expect.soft(page.getByText('Please enter End Time that\'s greater than Start Time.')).toBeVisible();

    // Validate text color
    const message_text = page.getByText('Please enter End Time that\'s greater than Start Time.');
    const text_color = await message_text.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("color")
    });
    expect(text_color).toBe("rgb(220, 38, 38)");

});

test('clean', async ({page}) => {
    // await page.pause();
    // if ( await page.locator("//div[@class='flex flex-col ...']/div[2]/div/mat-icon").isVisible() === true ){
    //     do {
    //         await page.locator("//div[@class='flex flex-col ...']/div[2]/div/mat-icon").click(),
    //         await page.getByRole('button', { name: 'Confirm' }).click()
    //     } while (await page.locator("//div[@class='flex flex-col ...']/div[2]/div/mat-icon").isVisible()); 
    //     console.log("Done cleaning, Master!");
    // } else {
    //     // pass
    // }

    if ( await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").isVisible() === true ){
        do {
            await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").isVisible();
            await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").click();
            await page.locator("//span[text()=' Confirm ']").click();
        } while (await page.$("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']")); 
        console.log("Done cleaning, Master!");
    } else {
        // pass
    }


});