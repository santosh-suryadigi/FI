// Visual Testing
import { test } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { resetViewPort, setViewPort } from "./utils/viewPortScreenShotUtils";

test("Example Test", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
 await page.locator("//div[@class='MuiBox-root css-79gg66']//p[@class='MuiTypography-root MuiTypography-body1 css-j0q4xf'][normalize-space()='Showing 1-20 of 79']").click()

  await page.waitForTimeout(3000)
await setViewPort(page, ".css-13av0mz") 
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await resetViewPort(page)
});
