const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"
import { checkQuestionFieldsCharacterLimit, validateCommonUIElements } from "./AddSurveyQuestionCommonUtils";

export async function createGroupQuestion(page){
    await expect(
      page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await page.click("//button[@name='addNewQuestion']");
    await expect(page.locator("//div[@role='dialog']")).toBeVisible();
    await page.getByRole('button', { name: 'Group' }).click();
    await setViewPort(page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(page.locator('.css-3j596c')).toHaveScreenshot('Group_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(page)
    await validateCommonUIElements(page)
    await expect(page.locator('#root')).toContainText('Questions Customisation');
    await expect(page.locator('#root')).toContainText('There are no questions added yet to this group.');
    await expect(page.getByText("Question Attributes")).toBeVisible();
    await expect(page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(
      page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await checkQuestionFieldsCharacterLimit(page)
    await page.getByPlaceholder('Enter question', { exact: true }).fill('Group Question');
    await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Save" })).toBeEnabled();
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await page.getByRole("button", { name: "Done" }).click();
    await expect(
      page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(page.getByRole('button', { name: 'Add Question' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Add Question' })).toBeEnabled()
  }

export async function createSubGroupQuestion(page){
  await page.getByRole('button', { name: 'Add Question' }).click()
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
      page.getByRole("button", { name: "Ranking" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Message" })
    ).toBeVisible();
  // Creates a single-select question as a group question
  await page.getByRole('button', { name: 'Single Select' }).click();
  await page.getByPlaceholder('Enter question', { exact: true }).fill('Tell more about the company');
  await page.getByRole('textbox').nth(2).fill('Question Description');
  await page.getByRole('button', { name: 'Choose Preset' }).click();
  await page.click("//div[@id='Scale']")
  await page.getByRole('option', { name: '5' }).click();
  await page.click("//div[@id='Preset Type']");
  await page.getByRole('option', { name: 'Willingness' }).click();
  await page.getByRole('button', { name: 'Choose Preset' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
// Creates a multi-select question as a group question
  await page.locator("//p[normalize-space()='Group Question']").click()
  await page.getByRole('button', { name: 'Add Question' }).click();
  await page.getByRole('button', { name: 'Multi Select' }).click();
  await page.getByPlaceholder('Enter question code', { exact: true }).fill('Q9');
  await page.getByPlaceholder('Enter question', { exact: true }).fill('What is the preferred mode of transportation?');
  await page.locator('.remirror-is-empty').click();
  await page.locator('.ProseMirror').fill('Please answer the above question.');
  await page.locator('button[name="addButton"]').click();
  await page.locator('button[name="addButton"]').first().click();
  await page.locator('button[name="addButton"]').first().click();
  await page.getByPlaceholder('Enter option').first().fill('Car');
  await page.getByPlaceholder('Enter code').first().fill('1');
  await page.getByPlaceholder('Enter option').nth(1).fill('Bike');
  await page.getByPlaceholder('Enter code').nth(1).fill('2');
  await page.getByPlaceholder('Enter option').nth(2).fill('Bus');
  await page.getByPlaceholder('Enter code').nth(2).fill('3');
  await page.getByPlaceholder('Enter option').nth(3).fill('Metro');
  await page.getByPlaceholder('Enter code').nth(3).fill('4');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await setViewPort(page, ".css-o0o90z") 
  await expect(page.locator('.css-o0o90z').first()).toHaveScreenshot('Question_scroll.png',{maxDiffPixelRatio:0.05});
  await resetViewPort(page)
  await expect(page).toHaveScreenshot('Edit_questionnaire_page.png',{mask:[page.locator('.css-3j596c')],maxDiffPixelRatio:0.05});
  await page.getByRole('button', { name: 'Q7 Group Question Group' }).click();
  await expect(page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Group Question');
  await expect(page.locator('.MuiStack-root > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Q8 Single Select Visible Tell' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Q9 Multi Select Visible What' })).toBeVisible();
}
