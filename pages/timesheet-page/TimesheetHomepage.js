import { Page, expect, waitForLoadState } from "@playwright/test";

export class TimesheetHomepage {
    constructor(page){
        this.page = page;
    }

    async clickNewTimeEntry() {
        const newTimeEntryButton = await this.page.locator("//button[@class='mat-focus-indicator fuse-mat-button-large justify-self-end bg-slate-800 text-white mat-flat-button mat-button-base']");
        await newTimeEntryButton.click();
        // await this.page.waitForLoadState('networkidle');
    }
    
    async deleteAllExistingTimeEntry() {
        const existingEntry = await this.page.locator("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]");
        existingEntry;

        if ( existingEntry.isVisible() === true ){
            do {
                // await page.locator("//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']").isVisible();
                existingEntry.click();
                await page.locator("//span[text()=' Confirm ']").click();
            } while (await page.$("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]")); 
            console.log("Done cleaning, Master!");
        } else {
            // pass
        }
    }
}