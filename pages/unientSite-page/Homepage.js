export class HomePage {
    constructor(page) {
        this.page = page;
        //page title locator
        this.header = page.locator("h1");
        //Homepage logo locator
        this.logo = page.getByRole('link', { name: 'logo development - online branding solutions' });
    


    }
}

