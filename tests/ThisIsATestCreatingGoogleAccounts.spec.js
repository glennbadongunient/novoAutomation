import { test } from "@playwright/test";

test('create a google account', async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("//span[contains(@class, 'gb_Sd') and text()='Sign in']").click();
    await page.locator("//span[contains(@class, 'VfPpkd-vQzf8d') and text()='Create account']").click();
    await page.locator("//span[contains(@class, 'VfPpkd-StrnGf-rymPhb-b9t22c') and text()='For my personal use']").click();
    await page.locator("#firstName").fill("TestFirstName");
    await page.locator("#lastName").fill("TestLastName");
    await page.locator("#username").fill("T3st.Us3r.Nvm3");
    await page.locator("#passwd").fill("T3stPa$$w0rd");
    await page.locator("#confirm-passwd").fill("T3stPa$$w0rd");
    await page.locator("#accountDetailsNext").click();
    await page.locator("#phoneNumberId").fill("09152596833");
    await page.locator("//button[contains(@class,'VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b')]").click();
    // await page.locator("//span[contains(@class, 'VfPpkd-vQzf8d') and text()='Next']").click();
    await page.pause();
}); 