// Visual Testing
import { test, expect } from "@playwright/test";
import { Loginpage } from "../pages/LoginPage";
import { Homepage } from "../pages/HomePage";
import { Projectpage } from "../pages/ProjectPage";

test("Example Test", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
  const home= new Homepage(page)
  await home.openExistingProject('Demo Project 28')
  const project = new Projectpage(page)
  await project.openSurvey('IT Survey')
  await page.click('//button[contains(.,"Edit Questionnaire")]');
  await page.locator("//p[normalize-space()='Q1']").click()
  await page.waitForTimeout(1000)
  await expect(page).toHaveScreenshot('Figma.png',{mask:[page.locator('.css-3j596c')]});
});
