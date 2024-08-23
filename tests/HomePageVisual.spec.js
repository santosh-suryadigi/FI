// Visual Testing
import { test } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";

const setViewPort = async (page, querySelector)=>{
  const currentViewport= page.viewportSize()
  const pixelsNotInView = await page.evaluate(({ querySelector, currentViewport })=>{
    const content = document.querySelector(querySelector)
    return  content.scrollHeight - content.clientHeight+ currentViewport.height
  }, { querySelector, currentViewport })
  await page.setViewportSize({
    width: currentViewport.width,
    height:  pixelsNotInView
  })
}

const resetViewPort = async (page)=>{
  await page.setViewportSize({ width: 1536, height: 730 })
}

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
await setViewPort(page, ".css-13av0mz") 
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await resetViewPort(page)
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