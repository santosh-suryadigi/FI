// Visual Testing
import { test, expect } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";
import { Projectpage } from "../pages/Projectpage";
import { setViewPort,resetViewPort } from "./utils/viewPortScreenShotUtils";

test("Example Test", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
//   await scrollFullPage(page);

  const home= new Homepage(page)
  await home.openExistingProject('Demo Project 105')
  const project = new Projectpage(page)
  await project.openSurvey('Employee Satisfaction')
  await page.waitForTimeout(1000)
//   await expect(page).toHaveScreenshot("ProjectPage.png", {fullPage: true,});
await expect(page).toHaveScreenshot('Create_questionnaire_page.png',{mask:[page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)")]});
});
