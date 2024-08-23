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
  await page.click('//button[contains(.,"Edit Questionnaire")]');
  await page.getByRole("button", { name: "Add New Question" }).click();
  await page.getByRole("button", { name: "Single Select" }).click();


  await page.waitForTimeout(3000)
//   await expect(page).toHaveScreenshot("ProjectPage.png", {fullPage: true,});
await expect(page).toHaveScreenshot('singleselect-fullpage.png',{fullPage: true,});
});
