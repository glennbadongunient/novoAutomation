import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/timesheet-page/LoginPage";
import { NewTimeEntry } from "../pages/timesheet-page/NewTimeEntry";
import { TimesheetHomepage } from "../pages/timesheet-page/TimesheetHomepage";

test.use({
    // screenshot: 'only-on-failure',
    // launchOptions:{slowMo: 1000},
    // viewport: {width:1920,height:1080},
    headless: false
});

// POM TRY
test('negative time', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const timesheetHomepage = new TimesheetHomepage(page);
    const newTimeEntry = new NewTimeEntry(page);

    await loginPage.goto();
    await loginPage.login("auto-test@unient.biz", "c+7lwR-P*FiGaQu!R1pa");
    await timesheetHomepage.deleteAllExistingTimeEntry();
    await timesheetHomepage.clickNewTimeEntry();
    await newTimeEntry.addDate();
    await newTimeEntry.addTime('09:00', '08:00');
    await newTimeEntry.addTask();
    await newTimeEntry.addNote();
    await newTimeEntry.clickAddTimeEntryButton();
    await newTimeEntry.validateEndOverStartTimeErrorMessage();
    await newTimeEntry.validateEndOverStartTimeErrorMessageColor();
});

test('add time entry', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const timesheetHomepage = new TimesheetHomepage(page);
    const newTimeEntry = new NewTimeEntry(page);

    await loginPage.goto();
    await loginPage.login("auto-test@unient.biz", "c+7lwR-P*FiGaQu!R1pa");
    await timesheetHomepage.deleteAllExistingTimeEntry();
    await timesheetHomepage.clickNewTimeEntry();
    await newTimeEntry.addDate();
    await newTimeEntry.addTime('08:00', '09:00');
    await newTimeEntry.addTask();
    await newTimeEntry.addNote();
    await newTimeEntry.clickAddTimeEntryButton();
});