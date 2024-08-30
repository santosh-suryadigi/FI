const { expect } = require("@playwright/test");

export async function reset(page){
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Reset Confirmation' })).toBeVisible();
    await expect(page.getByLabel('Reset Confirmation')).toContainText('Are you sure you want to reset? Once the reset is done, the data cannot be retrieved back.');
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeEnabled();
    await expect(page.getByRole('button', { name: 'Reset' })).toBeEnabled();
    await page.getByRole('button', { name: 'Reset' }).click();
  }

export async function questionFieldsCharacterLimit(page){
  await page.getByPlaceholder('Enter question code').fill('Q11111111111111111111111111111111111111111111111111111111111112');
  await expect(page.locator("(//p[normalize-space()='63/64'])")).toBeVisible();
  await page.keyboard.down('Control');
  await page.keyboard.press('Z');
  await page.keyboard.up('Control');
  await page.getByPlaceholder('Enter question', { exact: true }).fill('Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell mo');
  await expect(page.locator("(//p[normalize-space()='511/512'])")).toBeVisible();
}

export async function optionFieldsCharacterlimit(page){
  await page.getByPlaceholder('Enter option').first().fill('Not at all willingTell more abut the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about th');
  await expect(page.locator("(//p[normalize-space()='511/512'])").nth(1)).toBeVisible();
  await page.getByPlaceholder('Enter code').first().fill('Not at all willingTell more abou the compan Tell more about the');
  await expect(page.locator("(//p[normalize-space()='63/64'])")).toBeVisible();
}
export async function entryFieldsCharacterLimit(page){
  await page.getByPlaceholder('Enter title for the field').first().fill('Field Entry 1 Fi1eld Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Ent');
  await expect(page.locator("(//p[normalize-space()='128/128'])")).toBeVisible();
  await page.getByPlaceholder('Enter hint for the field').first().fill('Field Entry 1 Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entr');
  await expect(page.locator("(//p[normalize-space()='128/128'])").nth(1)).toBeVisible();
  await page.getByPlaceholder('Enter code').first().fill('Field Entry 1 Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entry 1Field Entr');
  await expect(page.locator("(//p[normalize-space()='64/64'])")).toBeVisible();
}
export async function messageFieldsCharacterLimit(page){
  await page.getByPlaceholder('Enter question code').fill('Q111111111111111111111111111111111111111111111111111111111111111');
  await expect(page.locator("(//p[normalize-space()='63/64'])")).toBeVisible();
  await page.getByPlaceholder('Enter message', { exact: true }).fill('Tell mre about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell more about the company Tell mor');
  await expect(page.locator("(//p[normalize-space()='511/512'])")).toBeVisible();
}
export async function maxNoOfOptions(page){
  await page.click("//button[@name='addNewQuestion']");
  await page.getByRole("button", { name: "Single Select" }).click();
  await page.locator('div:nth-child(4) > button').first().click({
    clickCount: 31
  });
  await expect(page.locator("(//input[@placeholder='Enter option'])")).toHaveCount(32)
  await page.getByRole('button', { name: 'Add New Question' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'Open Ended' }).click();
  await page.locator('button[name="addButton"]').first().click({
    clickCount: 13
  });
  await expect(page.locator(".css-534sdt")).toHaveCount(14)
  await page.reload()
  await page.waitForSelector("//button[@name='addNewQuestion']")
  }