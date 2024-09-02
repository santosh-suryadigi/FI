const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"
import { addOptions } from "./MultiSelectQuestion";
import { checkOptionFieldsCharacterLimit, checkQuestionFieldsCharacterLimit, resetQuestion, validateCommonUIElements } from "./AddSurveyQuestionCommonUtils";

export async function createRankingQuestion(page) {
    await expect(
      page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await page.click("//button[@name='addNewQuestion']");
    await expect(page.locator("//div[@role='dialog']")).toBeVisible();
    await page.getByRole("button", { name: "Ranking" }).click();
    await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(page.locator('.css-3j596c')).toHaveScreenshot('Ranking_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(page)
    await validateCommonUIElements(page)
    await expect(page.getByText("Choice Customisation")).toBeVisible();
    await page.getByPlaceholder("Enter question", { exact: true }).click();
    await expect(page.getByPlaceholder("Enter code")).toBeVisible();
    await expect(page.locator('button[name="addButton"]')).toBeVisible();
    await expect(page.getByText("Question Attributes")).toBeVisible();
    await expect(page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(page.locator("#root")).toContainText(
      "Indicate that all the options for this question are mandatory"
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
    await expect(page.getByText("Max. Selection")).toBeVisible();
    await expect(page.locator('button[name="plusButton"]')).toBeVisible();
    await expect(page.locator('input[name="inputField"]')).toBeVisible();
    await checkQuestionFieldsCharacterLimit(page)
    await checkOptionFieldsCharacterLimit(page)
    await page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("What is the preferred mode of transportation?");
    await page.locator(".remirror-is-empty").click();
    await page
      .locator(".ProseMirror")
      .fill("Please answer the above question.");
    await addOptions(page)
    await expect(
      page.getByRole("button", { name: "Reset", exact: true })
    ).toBeVisible();
    await page.locator('button[name="moveUpButton"]').nth(3).click();
    await page.locator('button[name="moveDownButton"]').nth(2).click();
    await resetQuestion(page)
    await addOptions(page)
    await page.locator('button[name="plusButton"]').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('#root')).toContainText('Please ensure that the max. selection does not exceed the total number of options.');
    await page.locator('button[name="minusButton"]').click();
    await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Save" })).toBeEnabled();
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.locator("//div[@role='dialog']")).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
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
    await expect(page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('What is the preferred mode of transportation?');
    await expect(page.getByPlaceholder('Enter option').first()).toHaveValue('Car');
    await expect(page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(page.getByPlaceholder('Enter option').nth(1)).toHaveValue('Bike');
    await expect(page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
    await expect(page.getByPlaceholder('Enter option').nth(2)).toHaveValue('Bus');
    await expect(page.getByPlaceholder('Enter code').nth(2)).toHaveValue('3');
    await expect(page.getByPlaceholder('Enter option').nth(3)).toHaveValue('Metro');
    await expect(page.getByPlaceholder('Enter code').nth(3)).toHaveValue('4');
    await expect(page.locator('input[name="inputField"]')).toHaveValue('4');
  }
