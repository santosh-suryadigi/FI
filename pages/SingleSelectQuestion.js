const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"

export async function createSingleSelectQuestion(page) {
  await expect(
    page.getByRole("button", { name: "Add New Question" })
  ).toBeVisible();
  await page.click("//button[@name='addNewQuestion']");
  await expect(page.locator("//div[@role='dialog']")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Single Select" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Multi Select" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Open Ended" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Grid" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Group" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Ranking" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Message" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Single Select" }).click();
  await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
  await expect(page.locator('.css-3j596c')).toHaveScreenshot('Single_select_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
  await resetViewPort(page)
  await expect(page.getByRole('button', { name: 'Manage' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
  await expect(page.locator('button[name="manageUsers"]')).toBeVisible();    
  await expect(page.locator("#root")).toContainText("Question");
  await expect(page.locator("#root")).toContainText(
    "Question Description"
  );
  await expect(
    page
      .locator(
        "div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root"
      )
      .first()
  ).toBeVisible();
  await expect(page.getByRole("textbox").nth(2)).toBeVisible();
  await expect(page.getByText("Choice Display Type")).toBeVisible();
  await expect(page.getByText("Selection")).toBeVisible();
  await expect(page.getByText("Slider", { exact: true })).toBeVisible();
  await expect(page.getByText("Rating Scale")).toBeVisible();
  await expect(page.getByText("Net Promoter Score™")).toBeVisible();
  await expect(page.getByText("Choice Customisation")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Choose Preset" })
  ).toBeVisible();
  await expect(page.getByPlaceholder("Enter code")).toBeVisible();
  await expect(page.getByText("Question Attributes")).toBeVisible();
  await expect(page.locator("#root")).toContainText(
    "Indicate this question as mandatory to the respondent"
  );
  await expect(page.locator("#root")).toContainText(
    "Make this question visible by default"
  );
  await expect(page.locator("#root")).toContainText(
    "Allow the user to reset their choices"
  );
  await expect(
    page.locator("(//input[@type='checkbox'])[1]")
  ).not.toBeChecked();
  await expect(
    page.locator("(//input[@type='checkbox'])[2]")
  ).toBeChecked();
  await expect(
    page.locator("(//input[@type='checkbox'])[3]")
  ).toBeChecked();
  await page
    .getByPlaceholder("Enter question", { exact: true })
    .fill("Tell more about the company");
  await page.getByRole("textbox").nth(2).fill("Question Description");
  await page.getByRole("button", { name: "Choose Preset" }).click();
  await page.click("//div[@id='Scale']");
  await page.getByRole("option", { name: "5" }).click();
  await page.click("//div[@id='Preset Type']");
  await page.getByRole("option", { name: "Willingness" }).click();
  await expect(page
    .getByRole("button", { name: "Choose Preset" }))
    .toBeEnabled();
  await page.getByRole("button", { name: "Choose Preset" }).click();
  await expect(
    page.locator('button[name="addButton"]').first()
  ).toBeVisible();
  await expect(
    page.locator('button[name="deleteButton"]').first()
  ).toBeVisible();
  await expect(
    page.locator('button[name="addButton"]').nth(1)
  ).toBeVisible();
  await expect(
    page.locator('button[name="deleteButton"]').nth(1)
  ).toBeVisible();
  await page.locator('button[name="deleteButton"]').nth(4).click();
  await page.locator('button[name="addButton"]').nth(3).click();
  await page.getByPlaceholder('Enter option').nth(4).fill('Extremely willing');
  await page.getByPlaceholder('Enter code').nth(4).fill('5');
  await expect(
    page.getByRole("button", { name: "Reset", exact: true })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Save" })).toBeEnabled();
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
  await expect(page.getByRole("heading")).toContainText("Successful");
  await expect(page.getByLabel("Successful")).toContainText(
    "The question has been saved successfully."
  );
  await expect(page.getByRole("img")).toBeVisible();
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
  await expect(page.locator('#root')).toContainText('Question Description');
  await expect(page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Tell more about the company');
  await expect(page.getByPlaceholder('Enter option').first()).toHaveValue('Not at all willing');
  await expect(page.getByPlaceholder('Enter option').nth(1)).toHaveValue('Not willing');
  await expect(page.getByPlaceholder('Enter option').nth(2)).toHaveValue('Neutral');
  await expect(page.getByPlaceholder('Enter option').nth(3)).toHaveValue('Willing');
  await expect(page.getByPlaceholder('Enter option').nth(4)).toHaveValue('Extremely willing');
}
