// Visual Testing
import { test, expect } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";
import { Projectpage } from "../pages/Projectpage";
import { resetViewPort, setViewPort } from "./utils/viewPortScreenShotUtils";


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
// await expect(page).toHaveScreenshot('singleselect-fullpage.png',{fullPage: true,});
await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
await expect(page).toHaveScreenshot('singleselect-fullpage.png',{fullPage: true,});
await resetViewPort(page)
});
