import { test, expect } from '@playwright/test';

//Check the Landing page - Meta description
test('Landing page', async ({ page }) => {
  await page.goto('https://www.unient.biz/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  const MetaDescription = page.locator("meta[name='description']");
  await expect(MetaDescription).toHaveAttribute("content","Empower your organisation to function onshore & offshore as one enterprise with Unient");
});

//Check the Teams page - Meta description
test("Teams page", async ({ page }) => {
    await page.goto("https://www.unient.biz/teams/");
    await page.getByRole("button", { name: "Accept All" }).click();
    const MetaDescription = page.locator("meta[name='description']");
    await expect(MetaDescription).toHaveAttribute("content","Scale faster and smarter and gain access to a premium global talent pool with our fully customisable offshore team solutions: Employer of Record and Managed Resources.");
  });

//Check the Infotech page - Meta description
test("Infotech page", async ({ page }) => {
    await page.goto("https://www.unient.biz/infotech/");
    await page.getByRole("button", { name: "Accept All" }).click();
    const MetaDescription = page.locator("meta[name='description']");
    await expect(MetaDescription).toHaveAttribute("content","We design & deliver tech-enabled solutions that give startups, small to medium businesses & global enterprises a competitive edge in — no matter the industry");
  });

//Check the Creatives page - Meta description
test("Creatives page", async ({ page }) => {
    await page.goto("https://www.unient.biz/creatives/");
    await page.getByRole("button", { name: "Accept All" }).click();
    const MetaDescription = page.locator("meta[name='description']");
    await expect(MetaDescription).toHaveAttribute("content","We offer a full suite of design & digital marketing & communications solutions to help businesses create meaningful connections, tell stories and drive conversions.");
  });

//Check the BPO page - Meta description
  test("BPO page", async ({ page }) => {
    await page.goto("https://www.unient.biz/bpo/");
    await page.getByRole("button", { name: "Accept All" }).click();
    const MetaDescription = page.locator("meta[name='description']");
    await expect(MetaDescription).toHaveAttribute("content","The Unient advantage: operational excellence with a human approach. We create exceptional customer experiences, streamline processes & enhance productivity.",);
  });

  //Check the About Us page - Meta description
  test("About Us page", async ({ page }) => {
    await page.goto("https://www.unient.biz/about-us/");
    await page.getByRole("button", { name: "Accept All" }).click();
    const MetaDescription = page.locator("meta[name='description']");
    await expect(MetaDescription).toHaveAttribute("content","We create value and deliver results. Unient, formerly known as Entrinsic Technology, maintains service fulfilment capabilities in the Philippines, Singapore & India.");
  });

   //Check the Blog page - Meta description
   test("Blog page", async ({ page }) => {
    await page.goto("https://www.unient.biz/blog/");
    await page.getByRole("button", { name: "Accept All" }).click();
    const MetaDescription = page.locator("meta[name='description']");
    await expect(MetaDescription).toHaveAttribute("content","Explore articles, industry insights, the latest trends & other resources about outsourcing, offshoring, remote staffing, management, leadership & innovation.");
  });

  