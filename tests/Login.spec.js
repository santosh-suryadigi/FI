// @ts-check
const { test, expect } = require('@playwright/test')

test('Links', async ({ page }) => {
  await page.goto('https://bo.dev.feedbackinsightspulse.com/');
  await page.waitForSelector('id=username');
  await page.fill('id=username',"santosh.v@surya-digital.com")
  await page.fill('id=password',"Password@123")
  await page.click('#kc-login')
  await page.waitForSelector('//tr//td[1]//div//p');
  const links = await page.$$('//tr//td[1]//div//p');
  for(const link of links){
      const linktext = await link.textContent()
      console.log(linktext)
 }
});
