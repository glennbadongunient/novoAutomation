import { test, expect } from '@playwright/test';

test('create 5 blog posts', async ({ page }) => {
    for (let i = 0; i < 4; i++) {
        await page.goto('https://identity.umbraco.com/5f36b6cc-f3ae-4a05-8ce1-826d1068a97d/b2c_1a_signinbackoffice/oauth2/v2.0/authorize?client_id=9aa4c3a3-826d-4103-9257-cda670a75b0b&redirect_uri=https%3A%2F%2Fdev-unientwww.euwest01.umbraco.io%2Fumbraco-signin-oidc&response_type=code%20id_token&scope=openid%20profile%20email%20offline_access%20https%3A%2F%2Fumbracoid.onmicrosoft.com%2F9aa4c3a3-826d-4103-9257-cda670a75b0b%2Fcms.cloud&response_mode=form_post&nonce=638145522384031640.MjEzYTY1NDgtY2YzYS00Nzc4LTg4NDAtMzkxMTcwZTQ1OGNlZmExYjE0MmEtMmU0Mi00ZTlmLTg1YzEtNDk2OGNhZjM5M2M5&client_info=1&x-client-brkrver=IDWeb.1.16.0.0&environment_id=98c39d56-6bb3-42e0-acd2-207aec991291&project_name=dev-unientwww.euwest01.umbraco.io&state=CfDJ8Mfw4jr8jPdNiKkFFhtQUs7NqQENstxAVKjjPIzLoHbVyUq6hCCsbcGO67RZxcFMv0N3lsfqrwhLYFIA3TJda8fozR3_R9GcDE9UFBDNia490D3csU3f-hpApi6QY_DpG1nc81ZArxggto2ERuhsCFueBGdKouV8YQ0mV54nv5PmIByoY1bKo_sBCXRTGoPJmSFCPqNOEqNYj_KOAb5Spam4Kq0bYE4h0j4l5MLR2eYoxrjCE554FF0aoeLGP6O7Jmh3QFLFuibmEj2KzM5zYfmuo3Rf52Eu3NnBmfEsfsbORykoVD8FhxpWO5bzKPGvE2fmNePyAGNV65rMoAbW5qBPm7vhom8ZZjUZNKVDyjL_hbgX8BXTLccjaBt4m_6dgg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.12.1.0#/content');
        // await page.getByPlaceholder('Email Address').click();
        await page.locator("//input[contains(@id, 'email') and @placeholder='Email Address']").fill('glenn.badong@unient.biz');
        //   await page.getByPlaceholder('Email Address').press('Tab');
        //   await page.getByLabel('Show password').press('Tab');
        await page.locator("//input[contains(@id, 'password') and @placeholder='Password']").fill('Lolzka24!');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.pause();


        const { chromium } = require('playwright');

        (async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: ' Sign in with Umbraco ID' }).click();
        const page1 = await page1Promise;
        await page1.goto('https://dev-unientwww.euwest01.umbraco.io/umbraco#/');
        await page1.goto('https://dev-unientwww.euwest01.umbraco.io/umbraco#/content');
        await page1.close();
        await page.goto('https://dev-unientwww.euwest01.umbraco.io/umbraco#/content');
        await page.getByRole('button', { name: 'Close' }).nth(2).click();

        // ---------------------
        await context.close();
        await browser.close();
        })();

        await page.goto('https://identity.umbraco.com/5f36b6cc-f3ae-4a05-8ce1-826d1068a97d/B2C_1A_SignInBackOffice/api/CombinedSigninAndSignup/confirmed?rememberMe=false&csrf_token=RlkwVDlOd3p2LzNLUjhQbW8zM1lzRkVXb3N2WDZBdkw4eFBtelZSNHBSZythaWQvV3ZSZFh5M3d3RUZXWVVMMjRGcWRrUEZkR2JHSjFCb3ZPeklHNVE9PTsyMDIzLTAzLTE2VDA4OjMwOjM5LjUxMTU5MzhaO3hhaHpKOWNvNFNQY1NOR0lEQ2lCanc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&tx=StateProperties=eyJUSUQiOiI1NDM2M2ZhYS1mNzhlLTRhMDktODZmYS0yNjQ1MjI0ZjlmOWYifQ&p=B2C_1A_SignInBackOffice&diags=%7B%22pageViewId%22%3A%22e90d0d15-5bd4-4ddf-92d4-64e22db3caea%22%2C%22pageId%22%3A%22CombinedSigninAndSignup%22%2C%22trace%22%3A%5B%7B%22ac%22%3A%22T005%22%2C%22acST%22%3A1678955439%2C%22acD%22%3A1%7D%2C%7B%22ac%22%3A%22T021%20-%20URL%3Ahttps%3A%2F%2Fstatic.identity.umbraco.com%2Fazure-ad-b2c%2Funified.html%22%2C%22acST%22%3A1678955439%2C%22acD%22%3A1224%7D%2C%7B%22ac%22%3A%22T019%22%2C%22acST%22%3A1678955440%2C%22acD%22%3A9%7D%2C%7B%22ac%22%3A%22T004%22%2C%22acST%22%3A1678955440%2C%22acD%22%3A3%7D%2C%7B%22ac%22%3A%22T003%22%2C%22acST%22%3A1678955440%2C%22acD%22%3A1%7D%2C%7B%22ac%22%3A%22T035%22%2C%22acST%22%3A1678955440%2C%22acD%22%3A0%7D%2C%7B%22ac%22%3A%22T030Online%22%2C%22acST%22%3A1678955440%2C%22acD%22%3A0%7D%2C%7B%22ac%22%3A%22T002%22%2C%22acST%22%3A1678955477%2C%22acD%22%3A0%7D%2C%7B%22ac%22%3A%22T018T010%22%2C%22acST%22%3A1678955474%2C%22acD%22%3A3031%7D%5D%7D');
        await page.goto('https://dev-unientwww.euwest01.umbraco.io/umbraco');
        await page.goto('https://dev-unientwww.euwest01.umbraco.io/umbraco#/');
        await page.goto('https://dev-unientwww.euwest01.umbraco.io/umbraco#/content');
        await page.getByRole('button', { name: 'Close' }).nth(2).click();
        await page.getByRole('button', { name: 'Expand child items for Homepage' }).click();
        await page.getByRole('link', { name: 'Blog' }).click();
        await page.locator('div:nth-child(3) > .btn').first().click();
        await page.getByRole('button', { name: '8. Generic Blog1' }).click();
        await page.locator('umb-property').filter({ hasText: 'Background Image ••• Open Property Actions Image Add' }).getByRole('button', { name: 'Add' }).click();
        await page.getByRole('button', { name: 'Blog Blog' }).click();
        await page.getByRole('button', { name: 'Pexels Ivan Samkov 8117555 (1) Pexels Ivan Samkov 8117555 (1)' }).click();
        await page.locator('umb-button').filter({ hasText: 'Select' }).getByRole('button', { name: 'Select' }).click();
        await page.getByLabel('s1header').click();
        await page.getByLabel('s1header').fill('This is a test for s1header');
        await page.locator('#blogItem1Image').click();
        await page.getByRole('button', { name: 'Pexels George Milton 7014518 Pexels George Milton 7014518' }).click();
        await page.locator('umb-button').filter({ hasText: 'Select' }).getByRole('button', { name: 'Select' }).click();
        //   await page.getByLabel('Article 1 Title').click();
        await page.getByLabel('Article 1 Title').fill('This is a test for Article 1 Title');
        //   await page.getByLabel('Article 1 Link').click();
        await page.getByLabel('Article 1 Link').fill('This i a test for Article 1 Link');
        await page.locator('#blogItem2Image').click();
        await page.getByRole('button', { name: 'Pexels Ivan Samkov 8117555 Pexels Ivan Samkov 8117555' }).click();
        await page.getByRole('button', { name: 'Pexels Vlada Karpovich 4050323 Pexels Vlada Karpovich 4050323' }).click();
        await page.locator('umb-button').filter({ hasText: 'Select' }).getByRole('button', { name: 'Select' }).click();
        //   await page.getByLabel('Article 2 Title').click();
        await page.getByLabel('Article 2 Title').fill('This is a test for Article 2 Title');
        //   await page.getByLabel('Article 2 Title').press('Tab');
        await page.getByLabel('Article 2 Link').fill('This is a test for Article 2 Link');
        //   await page.getByRole('textbox', { name: 'News' }).click();
        await page.getByRole('textbox', { name: 'News' }).fill('This is a test for News');
        //   await page.getByRole('textbox', { name: 'News' }).press('Tab');
        //   await page.getByLabel('News  Count').click();
        //   await page.getByLabel('News  Count').click();
        //   await page.getByLabel('News  Count').click();
        //   await page.getByLabel('News  Count').click();
        //   await page.getByLabel('News  Count').click();
        //   await page.getByLabel('News  Count').fill('1');
        //   await page.getByLabel('News  Count').click();
        await page.getByLabel('News  Count').fill('5');
        //   await page.getByRole('textbox', { name: 'Offshoring & Outsourcing' }).click();
        await page.getByRole('textbox', { name: 'Offshoring & Outsourcing' }).fill('test');
        //   await page.getByLabel('Offshoring & Outsourcing Count').click();
        //   await page.getByLabel('Offshoring & Outsourcing Count').fill('');
        //   await page.getByLabel('Offshoring & Outsourcing Count').click();
        await page.getByLabel('Offshoring & Outsourcing Count').fill('3');
        //   await page.getByRole('textbox', { name: 'Case Studies' }).click();
        //   await page.getByRole('textbox', { name: 'Case Studies' }).click();
        //   await page.getByLabel('Case Studies Count').click();
        await page.getByLabel('Case Studies Count').fill('2');
        await page.locator('div:nth-child(7) > .umb-group-panel__content > umb-property:nth-child(6) > .umb-property > .ng-valid-val-property-msg > .control-group').click();
        //   await page.getByRole('textbox', { name: 'Staffing' }).click();
        //   await page.getByRole('textbox', { name: 'Staffing' }).click();
        await page.getByRole('textbox', { name: 'Staffing' }).fill('test');
        //   await page.getByLabel('Staffing Count').click();
        await page.getByLabel('Staffing Count').fill('7');
        //   await page.getByRole('button', { name: 'Save and publish' }).click();
        //   await page.getByPlaceholder('Enter a name...').click();
        await page.getByPlaceholder('Enter a name...').fill('This is a test for blog title '+i);
        await page.getByRole('button', { name: 'Save and publish' }).click();
        await page.getByText('Content published: and is visible on the website').click();
        await page.locator('#tree').getByRole('link', { name: 'Blog' }).click();
        expect.soft(page.getByRole('link', { name: 'This is a test for blog title '+i }).isVisible());
    }
});