const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"

export async function createMessageQuestion(page){
    await expect(
      page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await page.click(this.addNewQuestionButton);
    await expect(page.locator("//div[@role='dialog']")).toBeVisible();
    await page.getByRole('button', { name: 'Message' }).click();
    await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(page.locator('.css-3j596c')).toHaveScreenshot('Message_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(page)
    await expect(page.locator('.MuiInputBase-root').first()).toBeVisible();
    await expect(page.locator('#root')).toContainText('Question Code *');
    await expect(page.locator('#root')).toContainText('Basic Information');
    await expect(page.locator('#root')).toContainText('Message');
    await expect(page.getByPlaceholder('Enter message')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root')).toBeVisible();
    await expect(page.locator('.MuiTypography-root > .lucide')).toBeVisible();
    await expect(page.getByRole('textbox').nth(2)).toBeVisible();
    await expect(page.locator('#root')).toContainText('Message Description');
    await expect(page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Manage' })).toBeEnabled();
    await expect(page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Preview Survey' })).toBeEnabled();
    await expect(page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(page.locator('button[name="manageUsers"]')).toBeEnabled();
    await expect(page.locator('#root')).toContainText('Question Attributes');
    await expect(page.getByText('Make this question visible by')).toBeVisible();
    await expect(page.locator('#root')).toContainText('Make this question visible by default');
    await expect(
      page.locator("(//input[@type='checkbox'])[1]")
    ).toBeChecked();    
    await expect(page.getByLabel('Make this question visible by')).toBeVisible();
    await page.getByPlaceholder('Enter message').fill('Please read this message to proceed further');
    await expect(page.getByRole("button", { name: "Save" })).toBeEnabled();
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(page.getByRole("heading")).toContainText("Successful");
    await expect(page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
    await expect(page.getByLabel('Successful').locator('circle')).toBeVisible();
    await expect(page.getByRole("img")).toBeVisible();
    await expect(page.getByRole("button", { name: "Done" })).toBeVisible();
    await page.getByRole("button", { name: "Done" }).click();
    await expect(
      page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();
    await expect(page.getByPlaceholder('Enter message')).toHaveValue('Please read this message to proceed further');

  }