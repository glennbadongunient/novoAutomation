import { Page, expect, waitForLoadState } from "@playwright/test";

export class TimesheetHomepage {
    constructor(page){
        this.page = page;
    }

    async clickNewTimeEntry() {
        const newTimeEntryButton = await this.page.locator("//button[@class='mat-focus-indicator fuse-mat-button-large justify-self-end bg-slate-800 text-white mat-flat-button mat-button-base']");
        await newTimeEntryButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}