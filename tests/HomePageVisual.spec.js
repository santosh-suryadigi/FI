// Visual Testing
import { test, expect } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";
test("Example Test", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
 await page.locator("//div[@class='MuiBox-root css-79gg66']//p[@class='MuiTypography-root MuiTypography-body1 css-j0q4xf'][normalize-space()='Showing 1-20 of 79']").click()

  await scrollFullPage(page);
//   const home= new Homepage(page)
//   await home.openExistingProject('Demo Project 28')
  await page.waitForTimeout(3000)
//   await expect(page).toHaveScreenshot("ProjectPage.png", {fullPage: true,});
await page.locator("(//div[@class='MuiStack-root css-j7qwjs'])[2]").screenshot({ path: 'screenshot.png', fullPage: true });
});
async function scrollFullPage(page) {
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          
          if (totalHeight >= scrollHeight){
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
  }