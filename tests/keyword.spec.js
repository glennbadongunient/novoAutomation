import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://stage-unientwww.euwest01.umbraco.io/blog/covid-and-offshore-outsourcing/');
  await page.getByLabel('User name').click();
  await page.getByLabel('User name').fill('unienttest');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Unient1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('heading', { name: 'A Lookback and A Look Forward' }).click({
    button: 'right'
  });

  const Keywords = page.locator("meta[name='keywords']");
    await expect(Keywords).toHaveAttribute("content","Offshore Outsourcing, Outsourcing Industry, Offshore outsourcing industry, remote work, remote working, digital transformation, outsourcing business, outsourcing talent");
  });
