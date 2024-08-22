// Visual Testing

 import { test, expect } from '@playwright/test';
 import { Loginpage } from '../pages/Loginpage';


 test('example test', async ({ page }) => {
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
   await expect(page).toHaveScreenshot('Homepage.png');
 });

//  await page.screenshot({ path: 'screenshot.png', fullPage: true });

