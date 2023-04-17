export class HomePage {
    constructor(page) {
        this.page = page;
    }


    // async goto() {
    //     await this.page.goto("https://stage-unientwww.euwest01.umbraco.io/");
    //     await this.page.waitForLoadState('networkidle');
    // }

    async expect() {
        //await page.getByRole('button', { name: 'Accept All' }).click();
        const Homepage = await this.page.locator("h1[class='display-4 mb-4 mt-8']").toHaveText("Your Versatile Partner for Better Offshoring");
       

        
        //Automatically close the page
         await this.page.close();


    }
}

