//This is to check if all pages are accessible using Production link;
import { test, expect } from '@playwright/test';

test('UnientProd', async ({ page }) => {
  await page.goto('https://www.unient.biz/');
  //Landing page
  await page.getByRole('button', { name: 'Accept All' }).click();
  await expect(page.locator("h1[class='display-4 mb-4 mt-8']")).toHaveText("Your Versatile Partner for Better Offshoring");

  //Teams page
  await page.getByRole('button', { name: 'Teams' }).click();
  await expect(page.locator("h1[class='mb-4 mt-6 display-4']")).toHaveText("Flexible High Quality Offshore Team Solutions");
  
  //Infotech page  
  await page.getByRole('button', { name: 'Infotech' }).click();
  await expect(page.locator("h1[class='display-2 mb-4 display-4']")).toHaveText("The Right Solution, Delivered The Right Way");
  
  //Creatives page
  await page.getByRole('button', { name: 'Creatives' }).click();
  await expect(page.locator("h1[class='display-4 mb-4 text-center m-header-font-size']")).toHaveText("High-Impact Design and Creative Solutions for Any Business");
  
  //BPO Page
  await page.getByRole('button', { name: 'BPO' }).click();
  await expect(page.locator("h1[class='display-4 mb-4 text-center m-header-font-size mt-5']")).toHaveText("Our Business Process Outsourcing Advantage: Operational Excellence with a Human Approach");

  //About Us 
  await page.getByRole('button', { name: 'About Us' }).click();
  await expect(page.locator("h1[class='display-4 mb-4 text-center']")).toHaveText("At Unient, We Create Value and Deliver Results");
  
  //Blog page 
  await page.getByRole('button', { name: 'Blog' }).click();
  await expect(page.locator("h1[class='display-2 mb-4 display-4']")).toHaveText("Unient: Unveiling Entrinsic Technology’s New Identity");

});