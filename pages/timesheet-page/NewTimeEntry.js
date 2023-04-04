import { Page } from "@playwright/test";

export class NewTimeEntry {
    constructor(page) {
        this.page = page;

        // getting date today
        const date = new Date();
        const day_now = (date.getDate());
        const month_now = (date.getMonth())+1;
        const year_now = date.getFullYear();
        this.date_now = month_now+"/"+day_now+"/"+year_now;
        this.date_now_validation = year_now+"-"+month_now+"-"+day_now;
        // console.log(date_now);
        // console.log(date_now_validation);
        // console.log("This is the date_now: %s",date_now);
        // console.log("This is the date_now_validation: %s",date_now_validation);
    }

    async addDate() {
        await this.page.locator("#mat-input-0").fill(this.date_now);
    }

    async addTime(startTime, endTime) {
        await this.page.locator("#mat-input-1").fill(startTime);
        await this.page.locator("#mat-input-2").fill(endTime);
    }

    async addTask() {
        await this.page.locator("#mat-input-3").fill('[INTERNAL-Non-Billable-Admin_Administrative Task] ');
        await this.page.locator("#mat-input-3").press("Enter");
    }

    async addNote() {
        await this.page.locator("#mat-input-4").fill('This is a test for the note field');
    }

    async clickAddTimeEntryButton() {
        await this.page.locator("//span[contains(@class,'mat-button-wrapper') and text()='Add Time Entry']").click();
    }
    
    async validateEndOverStartTimeErrorMessage() {
        expect.soft.this.page.locator("//div[@class='flex-1 mr-1 text-red-600']").isVisible();
    }
    
    async validateEndOverStartTimeErrorMessageColor() {
        // await expect.soft.this.page.locator("//div[@class='flex-1 mr-1 text-red-600']").isVisible();
        const message_text = this.page.locator("//div[@class='flex-1 mr-1 text-red-600']");
        const text_color = await message_text.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        });
        // console.log(text_color);
        expect.sorf(text_color).toBe("rgb(220, 38, 38)");
    }
}