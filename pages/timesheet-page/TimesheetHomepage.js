import { Page, expect, waitForLoadState } from "@playwright/test";

export class TimesheetHomepage {
    constructor(page){
        this.page = page;
    }

    async clickNewTimeEntry() {
        const newTimeEntryButton = this.page.locator("//button[@class='mat-focus-indicator fuse-mat-button-large justify-self-end bg-slate-800 text-white mat-flat-button mat-button-base']");
        await newTimeEntryButton.click();
    }
    
    async deleteAllExistingTimeEntry() {
        const table = await this.page.$("//div[@class='flex flex-col justify-center bg-white mt-2 sm:mt-2 drop-shadow-md']");
        const condition = await this.page.$("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']");

        // await this.page.waitForLoadState("networkidle");
        if( await this.page.$("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']") === true ){
            do {
                const xBot = await this.page.locator("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']");
                await xBot.click();

                await this.page.waitForSelector("//button[@type='button']/span[text()=' Confirm ']");               

                const confBot = await this.page.locator("//button[@type='button']/span[text()=' Confirm ']");
                await confBot.click();
                await confBot.isHidden();

            } while ( await this.page.$("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']") === true );
        } else {
            console.log('did not pasok mamser!')
        }
    }
}