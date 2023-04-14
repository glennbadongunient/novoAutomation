import { Page, expect, waitForLoadState } from "@playwright/test";

export class Common {
        constructor(page){
        this.page = page;
    }

    async clickElement(identifier){
        const elemToClick = this.page.locator(identifier).first();
        await elemToClick.click();
    }
}