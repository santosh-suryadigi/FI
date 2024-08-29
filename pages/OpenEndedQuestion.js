const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"

export async function createOpenEndedQuestion(page) {
    await expect(
      page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await page.click(this.addNewQuestionButton);
    await expect(page.locator("//div[@role='dialog']")).toBeVisible();
    await page.getByRole("button", { name: "Open Ended" }).click();
    await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(page.locator('.css-3j596c')).toHaveScreenshot('Open_ended_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
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
    await expect(
      page.getByText("Open Ended Field Customisation")
    ).toBeVisible();
    await expect(page.getByText("ENTRY")).toBeVisible();
    await expect(page.getByText("Field Title")).toBeVisible();
    await expect(page.getByText("Code *", { exact: true })).toBeVisible();
    await expect(page.getByText("Hint")).toBeVisible();
    await expect(page.locator('button[name="addButton"]')).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Reset" })
    ).toBeVisible();
    await expect(page.getByText("Question Attributes")).toBeVisible();
    await expect(page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(page.locator("#root")).toContainText(
      "Allow the user to reset their response"
    );
    await expect(
      page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await expect(
      page.locator("(//input[@type='checkbox'])[3]")
    ).not.toBeChecked();
    await page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Please enter your answers in the below fields");
    await page.locator('button[name="addButton"]').click();
    await expect(
      page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(page.getByText("ENTRY 2")).toBeVisible();
    await page.locator('button[name="addButton"]').first().click();
    await page
      .getByPlaceholder("Enter title for the field")
      .first()
      .fill("Field Entry 1");
    await page.getByPlaceholder("Enter code").first().fill("1");
    await page
      .getByPlaceholder("Enter title for the field")
      .nth(1)
      .fill("Field Entry 2");
    await page.getByPlaceholder("Enter code").nth(1).fill("2");
    await page
      .getByPlaceholder("Enter title for the field")
      .nth(2)
      .fill("Field Entry 3");
    await page.getByPlaceholder("Enter code").nth(2).fill("3");
    await page.locator('button[name="deleteButton"]').nth(2).click();
    await page.locator('button[name="addButton"]').nth(1).click();
    await page.getByPlaceholder('Enter title for the field').nth(2).fill('Field Entry 3');
    await page.getByPlaceholder('Enter code').nth(2).fill('3');
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
    await expect(page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Please enter your answers in the below fields');
    await expect(page.getByPlaceholder('Enter title for the field').first()).toHaveValue('Field Entry 1');
    await expect(page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(page.getByPlaceholder('Enter title for the field').nth(1)).toHaveValue('Field Entry 2');
    await expect(page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
    await expect(page.getByPlaceholder('Enter title for the field').nth(2)).toHaveValue('Field Entry 3');
    await expect(page.getByPlaceholder('Enter code').nth(2)).toHaveValue('3');

  }