// Visual Testing
import { test, expect } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";
import { Projectpage } from "../pages/Projectpage";

test("Example Test", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
//   await scrollFullPage(page);

  const home= new Homepage(page)
  await home.openExistingProject('Demo Project 52')
  const project = new Projectpage(page)
  await project.openSurvey('HR Survey')
  await page.waitForTimeout(3000)
  await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
  await expect(page).toHaveScreenshot('singleselect-fullpage.png',{fullPage: true,});
  await resetViewPort(page)
//   await expect(page).toHaveScreenshot("ProjectPage.png", {fullPage: true,});
await expect(page).toHaveScreenshot({ path: 'screenshot1.png', mask:[page.locator("//p[@class='MuiTypography-root MuiTypography-body1 css-yo8alg'][normalize-space()='HR Survey']"),page.locator('div:nth-child(3) > div > div > div > div'),page.locator("//div[@class='MuiStack-root css-1orwh6x']//div[3]//p")] });
});
