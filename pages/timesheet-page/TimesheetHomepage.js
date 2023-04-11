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
        const table = Boolean(await this.page.locator("//div[@class='flex flex-col justify-center bg-white mt-2 sm:mt-2 drop-shadow-md']"));
        const condition = Boolean(await this.page.locator("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']"));

        await this.page.waitForLoadState("load");
        if( condition === true ){
            do {
                const xBot = await this.page.locator("//div[@class='hover:bg-slate-200 flex ng-star-inserted'][1]//mat-icon[contains(@class, 'mat-icon notranslate cursor-pointer material-icons mat-icon-no-color') and text()='highlight_off']");
                await xBot.click();

                await this.page.waitForSelector("//button[@type='button']/span[text()=' Confirm ']");               

                const confBot = await this.page.locator("//button[@type='button']/span[text()=' Confirm ']");
                await confBot.click();
                await confBot.isHidden();

            } while ( condition === true );
        } else {
            console.log('did not pasok mamser!')
        }
    }
}