const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"
import { optionFieldsCharacterlimit, questionFieldsCharacterLimit, reset } from "./AddSurveyQuestionCommonUtils";

export async function createGridQuestion(page) {
    await expect(
      page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await page.click("//button[@name='addNewQuestion']");
    await expect(page.locator("//div[@role='dialog']")).toBeVisible();
    await page.getByRole("button", { name: "Grid" }).click();
    await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(page.locator('.css-3j596c')).toHaveScreenshot('Grid_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(page)
    await expect(page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(page.locator("#root")).toContainText("Basic Information");
    await expect(page.locator("#root")).toContainText("Question Code *");
    await expect(
      page.getByPlaceholder("Enter question code")
    ).toBeVisible();
    await expect(page.locator("#root")).toContainText("Question");
    await expect(
      page.getByPlaceholder("Enter question", { exact: true })
    ).toBeVisible();
    await expect(page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(page.locator(".ProseMirror")).toBeVisible();
    await expect(page.locator("#root")).toContainText(
      "Questions Customisation"
    );
    await expect(page.getByRole("tab", { name: "Rows" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "Columns" })).toBeVisible();
    await expect(page.getByText("ROW CUSTOMIZATION")).toBeVisible();
    await expect(page.locator("#root")).toContainText("ROW CUSTOMIZATION");
    await expect(
      page.locator(
        "div:nth-child(3) > div > .MuiFormControl-root > .MuiInputBase-root"
      )
    ).toBeVisible();
    await expect(page.getByPlaceholder("Enter option")).toBeVisible();
    await expect(page.getByPlaceholder("Enter code")).toBeVisible();
    await expect(page.locator('button[name="addButton"]')).toBeVisible();
    await expect(page.locator("#root")).toContainText(
      "Question Attributes"
    );
    await expect(page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(page.locator("#root")).toContainText(
      "Indicate all the row options as mandatory if row attempted"
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
    ).not.toBeChecked();
    await expect(
      page.locator("(//input[@type='checkbox'])[4]")
    ).toBeChecked();
    await questionFieldsCharacterLimit(page)
    await optionFieldsCharacterlimit(page)
    await page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Grid Question");
    await addRowData(page)
    await reset(page)
    await addRowData(page)
    await expect(
      page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(
      page.locator('button[name="addButton"]').nth(1)
    ).toBeVisible();
    await expect(
      page.locator('button[name="deleteButton"]').nth(1)
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Reset" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
    await page.getByRole("tab", { name: "Columns" }).click();
    await expect(page.getByText("COLUMN 1")).toBeVisible();
    await expect(page.locator("#root")).toContainText("COLUMN 1");
    await expect(
      page
        .locator(
          "div:nth-child(3) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(page.locator('input[name="columnCode"]')).toBeVisible();
    await expect(page.locator("#root")).toContainText("Question Type");
    await expect(
      page.getByRole("radiogroup").getByText("Single Select")
    ).toBeVisible();
    await expect(
      page.getByRole("radiogroup").getByText("Multi Select")
    ).toBeVisible();
    await expect(
      page.getByRole("radiogroup").getByText("Open Ended")
    ).toBeVisible();
    await page.getByPlaceholder("Enter code").first().fill("Col1");
    await page.locator('input[name="code"]').fill("1");
    await page.locator('button[name="addButton"]').first().click();
    await page.locator('button[name="addButton"]').nth(1).click();
    await expect(
      page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(page.locator("#root")).toContainText("COLUMN 2");
    await page.locator('input[name="code"]').nth(1).fill("2");
    await page.locator('input[name="code"]').nth(2).fill("3");
    await page.getByLabel("Single Select").nth(1).check();
    await expect(
      page.getByText(
        "Choice Display TypeSelectionRadio ButtonsDropdownSliderDefault SliderRYG"
      )
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Choose Preset" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Choose Preset" }).click();
    await page.getByText("Select", { exact: true }).click();
    await page.getByText("Good-Poor").click();
    await page.getByRole("button", { name: "Choose Preset" }).click();
    await page.getByLabel("Multi Select").nth(2).check();
    await page
      .locator("div:nth-child(2) > div > div:nth-child(3) > button")
      .first()
      .click();
    await page
      .locator(
        "div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #text-input-field"
      )
      .first()
      .fill("1");
    await page
      .locator(
        "div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #text-input-field"
      )
      .fill("2");
    await page.getByPlaceholder("Enter option").nth(3).fill("High");
    await page
      .locator(
        "div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div > .MuiFormControl-root > .MuiInputBase-root"
      )
      .first()
      .click();
    await page.getByPlaceholder("Enter option").nth(4).fill("Low");
    await expect(page.getByRole("button", { name: "Save" })).toBeEnabled();
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(page.getByRole("heading")).toContainText("Successful");
    await expect(page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
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
    await expect(page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Grid Question');
    await expect(page.getByPlaceholder('Enter row header')).toHaveValue('Row Header');
    await expect(page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
  }

  async function addRowData(page){
    await page.getByPlaceholder("Enter row header").fill("Row Header");
    await page.locator('button[name="addButton"]').click();
    await page.getByPlaceholder("Enter code").first().fill("1");
    await page.getByPlaceholder("Enter code").nth(1).fill("2");
    await page.locator('button[name="deleteButton"]').nth(1).click();
    await page.locator('button[name="addButton"]').click();
    await page.getByPlaceholder('Enter code').nth(1).fill('2');
  }