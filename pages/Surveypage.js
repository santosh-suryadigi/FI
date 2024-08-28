const { expect } = require("@playwright/test");
import { resetViewPort, setViewPort } from "../tests/utils/viewPortScreenShotUtils"

export class Surveypage {
  constructor(page) {
    this.page = page;
    this.createQuestionnaireButton = 'button[name="createQuestionnaire"]';
    this.editQuestionnaireButton = '//button[contains(.,"Edit Questionnaire")]';
    this.addNewQuestionButton="//button[@name='addNewQuestion']"
    this.addSubQuestionButton="//button[@name='addQuestion']"
  }

  async navigateToEditQuestionnairePage(){
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaireButton);
    }
  }

  async createSingleSelectQuestion() {
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Single Select" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Multi Select" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Open Ended" })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Grid" })).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Group" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Ranking" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Message" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Single Select" }).click();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Single_select_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();    
    await expect(this.page.locator("#root")).toContainText("Question");
    await expect(this.page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(
      this.page
        .locator(
          "div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(this.page.getByRole("textbox").nth(2)).toBeVisible();
    await expect(this.page.getByText("Choice Display Type")).toBeVisible();
    await expect(this.page.getByText("Selection")).toBeVisible();
    await expect(this.page.getByText("Slider", { exact: true })).toBeVisible();
    await expect(this.page.getByText("Rating Scale")).toBeVisible();
    await expect(this.page.getByText("Net Promoter Score™")).toBeVisible();
    await expect(this.page.getByText("Choice Customisation")).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Choose Preset" })
    ).toBeVisible();
    await expect(this.page.getByPlaceholder("Enter code")).toBeVisible();
    await expect(this.page.getByText("Question Attributes")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Allow the user to reset their choices"
    );
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[3]")
    ).toBeChecked();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Tell more about the company");
    await this.page.getByRole("textbox").nth(2).fill("Question Description");
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await this.page.click("//div[@id='Scale']");
    await this.page.getByRole("option", { name: "5" }).click();
    await this.page.click("//div[@id='Preset Type']");
    await this.page.getByRole("option", { name: "Willingness" }).click();
    await expect(this.page
      .getByRole("button", { name: "Choose Preset" }))
      .toBeEnabled();
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await expect(
      this.page.locator('button[name="addButton"]').first()
    ).toBeVisible();
    await expect(
      this.page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(
      this.page.locator('button[name="addButton"]').nth(1)
    ).toBeVisible();
    await expect(
      this.page.locator('button[name="deleteButton"]').nth(1)
    ).toBeVisible();
    await this.page.locator('button[name="deleteButton"]').nth(4).click();
    await this.page.locator('button[name="addButton"]').nth(3).click();
    await this.page.getByPlaceholder('Enter option').nth(4).fill('Extremely willing');
    await this.page.getByPlaceholder('Enter code').nth(4).fill('5');
    await expect(
      this.page.getByRole("button", { name: "Reset", exact: true })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(this.page.getByRole("heading")).toContainText("Successful");
    await expect(this.page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
    await expect(this.page.getByRole("img")).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();
    await expect(this.page.locator('#root')).toContainText('Question Description');
    await expect(this.page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Tell more about the company');
    await expect(this.page.getByPlaceholder('Enter option').first()).toHaveValue('Not at all willing');
    await expect(this.page.getByPlaceholder('Enter option').nth(1)).toHaveValue('Not willing');
    await expect(this.page.getByPlaceholder('Enter option').nth(2)).toHaveValue('Neutral');
    await expect(this.page.getByPlaceholder('Enter option').nth(3)).toHaveValue('Willing');
    await expect(this.page.getByPlaceholder('Enter option').nth(4)).toHaveValue('Extremely willing');
  }

  async createMultiSelectQuestion() {
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole("button", { name: "Multi Select" }).click();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Multi_select_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("Question");
    await expect(this.page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(
      this.page
        .locator(
          "div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(this.page.getByRole("textbox").nth(2)).toBeVisible();
    await expect(this.page.getByText("Choice Customisation")).toBeVisible();
    await this.page.getByPlaceholder("Enter question", { exact: true }).click();
    await expect(this.page.getByPlaceholder("Enter code")).toBeVisible();
    await expect(this.page.locator('button[name="addButton"]')).toBeVisible();
    await expect(this.page.getByText("Question Attributes")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Allow the user to reset their choices"
    );
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[3]")
    ).not.toBeChecked();
    await expect(this.page.getByText("Max. Selection")).toBeVisible();
    await expect(this.page.locator('button[name="plusButton"]')).toBeVisible();
    await expect(this.page.locator('input[name="inputField"]')).toBeVisible();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("What is the preferred mode of transportation?");
    await this.page.locator(".remirror-is-empty").click();
    await this.page
      .locator(".ProseMirror")
      .fill("Please answer the above question.");
    await this.page.locator('button[name="addButton"]').click();
    await expect(this.page.locator('button[name="minusButton"]')).toBeVisible();
    await this.page.locator('button[name="addButton"]').first().click();
    await this.page.locator('button[name="addButton"]').first().click();
    await this.page.getByPlaceholder("Enter option").first().fill("Car");
    await this.page.getByPlaceholder("Enter code").first().fill("1");
    await this.page.getByPlaceholder("Enter option").nth(1).fill("Bike");
    await this.page.getByPlaceholder("Enter code").nth(1).fill("2");
    await this.page.getByPlaceholder("Enter option").nth(2).fill("Bus");
    await this.page.getByPlaceholder("Enter code").nth(2).fill("3");
    await this.page.getByPlaceholder("Enter option").nth(3).fill("Metro");
    await this.page.getByPlaceholder("Enter code").nth(3).fill("4");
    await this.page.locator('button[name="deleteButton"]').nth(3).click();
    await this.page.locator('button[name="addButton"]').nth(2).click();
    await this.page.getByPlaceholder('Enter option').nth(3).fill('Metro');
    await this.page.getByPlaceholder('Enter code').nth(3).fill('4');
    await expect(
      this.page.getByRole("button", { name: "Reset", exact: true })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(this.page.getByRole("heading")).toContainText("Successful");
    await expect(this.page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
    await expect(this.page.getByRole("img")).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();
    await expect(this.page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('What is the preferred mode of transportation?');
    await expect(this.page.getByPlaceholder('Enter option').first()).toHaveValue('Car');
    await expect(this.page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(this.page.getByPlaceholder('Enter option').nth(1)).toHaveValue('Bike');
    await expect(this.page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
    await expect(this.page.getByPlaceholder('Enter option').nth(2)).toHaveValue('Bus');
    await expect(this.page.getByPlaceholder('Enter code').nth(2)).toHaveValue('3');
    await expect(this.page.getByPlaceholder('Enter option').nth(3)).toHaveValue('Metro');
    await expect(this.page.getByPlaceholder('Enter code').nth(3)).toHaveValue('4');
    await expect(this.page.locator('input[name="inputField"]')).toHaveValue('4');
  }

  async createOpenEndedQuestion() {
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole("button", { name: "Open Ended" }).click();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Open_ended_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();    
    await expect(this.page.locator("#root")).toContainText("Question");
    await expect(this.page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(
      this.page
        .locator(
          "div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(this.page.getByRole("textbox").nth(2)).toBeVisible();
    await expect(
      this.page.getByText("Open Ended Field Customisation")
    ).toBeVisible();
    await expect(this.page.getByText("ENTRY")).toBeVisible();
    await expect(this.page.getByText("Field Title")).toBeVisible();
    await expect(this.page.getByText("Code *", { exact: true })).toBeVisible();
    await expect(this.page.getByText("Hint")).toBeVisible();
    await expect(this.page.locator('button[name="addButton"]')).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Reset" })
    ).toBeVisible();
    await expect(this.page.getByText("Question Attributes")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Allow the user to reset their response"
    );
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[3]")
    ).not.toBeChecked();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Please enter your answers in the below fields");
    await this.page.locator('button[name="addButton"]').click();
    await expect(
      this.page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(this.page.getByText("ENTRY 2")).toBeVisible();
    await this.page.locator('button[name="addButton"]').first().click();
    await this.page
      .getByPlaceholder("Enter title for the field")
      .first()
      .fill("Field Entry 1");
    await this.page.getByPlaceholder("Enter code").first().fill("1");
    await this.page
      .getByPlaceholder("Enter title for the field")
      .nth(1)
      .fill("Field Entry 2");
    await this.page.getByPlaceholder("Enter code").nth(1).fill("2");
    await this.page
      .getByPlaceholder("Enter title for the field")
      .nth(2)
      .fill("Field Entry 3");
    await this.page.getByPlaceholder("Enter code").nth(2).fill("3");
    await this.page.locator('button[name="deleteButton"]').nth(2).click();
    await this.page.locator('button[name="addButton"]').nth(1).click();
    await this.page.getByPlaceholder('Enter title for the field').nth(2).fill('Field Entry 3');
    await this.page.getByPlaceholder('Enter code').nth(2).fill('3');
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(this.page.getByRole("heading")).toContainText("Successful");
    await expect(this.page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
    await expect(this.page.getByRole("img")).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();
    await expect(this.page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Please enter your answers in the below fields');
    await expect(this.page.getByPlaceholder('Enter title for the field').first()).toHaveValue('Field Entry 1');
    await expect(this.page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(this.page.getByPlaceholder('Enter title for the field').nth(1)).toHaveValue('Field Entry 2');
    await expect(this.page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
    await expect(this.page.getByPlaceholder('Enter title for the field').nth(2)).toHaveValue('Field Entry 3');
    await expect(this.page.getByPlaceholder('Enter code').nth(2)).toHaveValue('3');

  }

  async createGridQuestion() {
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole("button", { name: "Grid" }).click();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Grid_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("Basic Information");
    await expect(this.page.locator("#root")).toContainText("Question Code *");
    await expect(
      this.page.getByPlaceholder("Enter question code")
    ).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("Question");
    await expect(
      this.page.getByPlaceholder("Enter question", { exact: true })
    ).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(this.page.locator(".ProseMirror")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Questions Customisation"
    );
    await expect(this.page.getByRole("tab", { name: "Rows" })).toBeVisible();
    await expect(this.page.getByRole("tab", { name: "Columns" })).toBeVisible();
    await expect(this.page.getByText("ROW CUSTOMIZATION")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("ROW CUSTOMIZATION");
    await expect(
      this.page.locator(
        "div:nth-child(3) > div > .MuiFormControl-root > .MuiInputBase-root"
      )
    ).toBeVisible();
    await expect(this.page.getByPlaceholder("Enter option")).toBeVisible();
    await expect(this.page.getByPlaceholder("Enter code")).toBeVisible();
    await expect(this.page.locator('button[name="addButton"]')).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Question Attributes"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Indicate all the row options as mandatory if row attempted"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Allow the user to reset their choices"
    );
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[3]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[4]")
    ).toBeChecked();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Grid Question");
    await this.page.getByPlaceholder("Enter row header").fill("Row Header");
    await this.page.locator('button[name="addButton"]').click();
    await this.page.getByPlaceholder("Enter code").first().fill("1");
    await this.page.getByPlaceholder("Enter code").nth(1).fill("2");
    await this.page.locator('button[name="deleteButton"]').nth(1).click();
    await this.page.locator('button[name="addButton"]').click();
    await this.page.getByPlaceholder('Enter code').nth(1).fill('2');
    await expect(
      this.page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(
      this.page.locator('button[name="addButton"]').nth(1)
    ).toBeVisible();
    await expect(
      this.page.locator('button[name="deleteButton"]').nth(1)
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Reset" })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await this.page.getByRole("tab", { name: "Columns" }).click();
    await expect(this.page.getByText("COLUMN 1")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("COLUMN 1");
    await expect(
      this.page
        .locator(
          "div:nth-child(3) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(this.page.locator('input[name="columnCode"]')).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("Question Type");
    await expect(
      this.page.getByRole("radiogroup").getByText("Single Select")
    ).toBeVisible();
    await expect(
      this.page.getByRole("radiogroup").getByText("Multi Select")
    ).toBeVisible();
    await expect(
      this.page.getByRole("radiogroup").getByText("Open Ended")
    ).toBeVisible();
    await this.page.locator('input[name="code"]').fill("1");
    await this.page.locator('button[name="addButton"]').first().click();
    await this.page.locator('button[name="addButton"]').nth(1).click();
    await expect(
      this.page.locator('button[name="deleteButton"]').first()
    ).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("COLUMN 2");
    await this.page.locator('input[name="code"]').nth(1).fill("2");
    await this.page.locator('input[name="code"]').nth(2).fill("3");
    await this.page.getByLabel("Single Select").nth(1).check();
    await expect(
      this.page.getByText(
        "Choice Display TypeSelectionRadio ButtonsDropdownSliderDefault SliderRYG"
      )
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Choose Preset" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await this.page.getByText("Select", { exact: true }).click();
    await this.page.getByText("Good-Poor").click();
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await this.page.getByLabel("Multi Select").nth(2).check();
    await this.page
      .locator("div:nth-child(2) > div > div:nth-child(3) > button")
      .first()
      .click();
    await this.page
      .locator(
        "div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #text-input-field"
      )
      .first()
      .fill("1");
    await this.page
      .locator(
        "div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #text-input-field"
      )
      .fill("2");
    await this.page.getByPlaceholder("Enter option").nth(3).fill("High");
    await this.page
      .locator(
        "div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div > .MuiFormControl-root > .MuiInputBase-root"
      )
      .first()
      .click();
    await this.page.getByPlaceholder("Enter option").nth(4).fill("Low");
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(this.page.getByRole("heading")).toContainText("Successful");
    await expect(this.page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
    await expect(this.page.getByRole("img")).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Done" })).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();    
    await expect(this.page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Grid Question');
    await expect(this.page.getByPlaceholder('Enter row header')).toHaveValue('Row Header');
    await expect(this.page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(this.page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
  }

  async createMessageQuestion(){
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole('button', { name: 'Message' }).click();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Message_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.locator('.MuiInputBase-root').first()).toBeVisible();
    await expect(this.page.locator('#root')).toContainText('Question Code *');
    await expect(this.page.locator('#root')).toContainText('Basic Information');
    await expect(this.page.locator('#root')).toContainText('Message');
    await expect(this.page.getByPlaceholder('Enter message')).toBeVisible();
    await expect(this.page.locator('div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root')).toBeVisible();
    await expect(this.page.locator('.MuiTypography-root > .lucide')).toBeVisible();
    await expect(this.page.getByRole('textbox').nth(2)).toBeVisible();
    await expect(this.page.locator('#root')).toContainText('Message Description');
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeEnabled();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeEnabled();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeEnabled();
    await expect(this.page.locator('#root')).toContainText('Question Attributes');
    await expect(this.page.getByText('Make this question visible by')).toBeVisible();
    await expect(this.page.locator('#root')).toContainText('Make this question visible by default');
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).toBeChecked();    
    await expect(this.page.getByLabel('Make this question visible by')).toBeVisible();
    await this.page.getByPlaceholder('Enter message').fill('Please read this message to proceed further');
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await expect(this.page.getByRole("heading")).toContainText("Successful");
    await expect(this.page.getByLabel("Successful")).toContainText(
      "The question has been saved successfully."
    );
    await expect(this.page.getByLabel('Successful').locator('circle')).toBeVisible();
    await expect(this.page.getByRole("img")).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Done" })).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();
    await expect(this.page.getByPlaceholder('Enter message')).toHaveValue('Please read this message to proceed further');

  }

  async createRankingQuestion() {
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole("button", { name: "Ranking" }).click();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Ranking_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("Question");
    await expect(this.page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(
      this.page
        .locator(
          "div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(this.page.getByRole("textbox").nth(2)).toBeVisible();
    await expect(this.page.getByText("Choice Customisation")).toBeVisible();
    await this.page.getByPlaceholder("Enter question", { exact: true }).click();
    await expect(this.page.getByPlaceholder("Enter code")).toBeVisible();
    await expect(this.page.locator('button[name="addButton"]')).toBeVisible();
    await expect(this.page.getByText("Question Attributes")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Indicate that all the options for this question are mandatory"
    );
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[3]")
    ).not.toBeChecked();
    await expect(this.page.getByText("Max. Selection")).toBeVisible();
    await expect(this.page.locator('button[name="plusButton"]')).toBeVisible();
    await expect(this.page.locator('input[name="inputField"]')).toBeVisible();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("What is the preferred mode of transportation?");
    await this.page.locator(".remirror-is-empty").click();
    await this.page
      .locator(".ProseMirror")
      .fill("Please answer the above question.");
    await this.page.locator('button[name="addButton"]').click();
    await expect(this.page.locator('button[name="minusButton"]')).toBeVisible();
    await this.page.locator('button[name="addButton"]').first().click();
    await this.page.locator('button[name="addButton"]').first().click();
    await this.page.getByPlaceholder("Enter option").first().fill("Car");
    await this.page.getByPlaceholder("Enter code").first().fill("1");
    await this.page.getByPlaceholder("Enter option").nth(1).fill("Bike");
    await this.page.getByPlaceholder("Enter code").nth(1).fill("2");
    await this.page.getByPlaceholder("Enter option").nth(2).fill("Bus");
    await this.page.getByPlaceholder("Enter code").nth(2).fill("3");
    await this.page.getByPlaceholder("Enter option").nth(3).fill("Metro");
    await this.page.getByPlaceholder("Enter code").nth(3).fill("4");
    await this.page.locator('button[name="deleteButton"]').nth(3).click();
    await this.page.locator('button[name="addButton"]').nth(2).click();
    await this.page.getByPlaceholder('Enter option').nth(3).fill('Metro');
    await this.page.getByPlaceholder('Enter code').nth(3).fill('4');
    await expect(
      this.page.getByRole("button", { name: "Reset", exact: true })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Clone" })
    ).toBeEnabled();
    await expect(this.page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('What is the preferred mode of transportation?');
    await expect(this.page.getByPlaceholder('Enter option').first()).toHaveValue('Car');
    await expect(this.page.getByPlaceholder('Enter code').first()).toHaveValue('1');
    await expect(this.page.getByPlaceholder('Enter option').nth(1)).toHaveValue('Bike');
    await expect(this.page.getByPlaceholder('Enter code').nth(1)).toHaveValue('2');
    await expect(this.page.getByPlaceholder('Enter option').nth(2)).toHaveValue('Bus');
    await expect(this.page.getByPlaceholder('Enter code').nth(2)).toHaveValue('3');
    await expect(this.page.getByPlaceholder('Enter option').nth(3)).toHaveValue('Metro');
    await expect(this.page.getByPlaceholder('Enter code').nth(3)).toHaveValue('4');
    await expect(this.page.locator('input[name="inputField"]')).toHaveValue('4');
  }

  async createGroupQuestion(){
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.click(this.addNewQuestionButton);
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole('button', { name: 'Group' }).click();
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Manage' })).toBeEnabled();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Preview Survey' })).toBeEnabled();
    await setViewPort(this.page, "div[class='MuiStack-root css-3j596c'] div[class='MuiStack-root css-o0o90z']") 
    await expect(this.page.locator('.css-3j596c')).toHaveScreenshot('Group_question.png',{fullPage: true,maxDiffPixelRatio:0.05});
    await resetViewPort(this.page)
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(this.page.locator("#root")).toContainText("Question");
    await expect(this.page.locator("#root")).toContainText(
      "Question Description"
    );
    await expect(
      this.page
        .locator(
          "div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > .MuiFormControl-root > .MuiInputBase-root"
        )
        .first()
    ).toBeVisible();
    await expect(this.page.getByRole("textbox").nth(2)).toBeVisible();
    await expect(this.page.locator('#root')).toContainText('Questions Customisation');
    await expect(this.page.locator('#root')).toContainText('There are no questions added yet to this group.');
    await expect(this.page.getByText("Question Attributes")).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Indicate this question as mandatory to the respondent"
    );
    await expect(this.page.locator("#root")).toContainText(
      "Make this question visible by default"
    );
    await expect(
      this.page.locator("(//input[@type='checkbox'])[1]")
    ).not.toBeChecked();
    await expect(
      this.page.locator("(//input[@type='checkbox'])[2]")
    ).toBeChecked();
    await this.page.getByPlaceholder('Enter question', { exact: true }).fill('Group Question');
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator('.css-uhb5lp')).toHaveScreenshot('Success_dialog_box.png',{maxDiffPixelRatio:0.05});
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Delete" })
    ).toBeEnabled();
    await expect(this.page.getByRole('button', { name: 'Add Question' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Add Question' })).toBeEnabled()
  }

async createSubGroupQuestion(){
  await this.page.getByRole('button', { name: 'Add Question' }).click()
  await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Single Select" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Multi Select" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Open Ended" })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Grid" })).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Ranking" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Message" })
    ).toBeVisible();
  // Creates a single-select question as a group question
  await this.page.getByRole('button', { name: 'Single Select' }).click();
  await this.page.getByPlaceholder('Enter question', { exact: true }).fill('Tell more about the company');
  await this.page.getByRole('textbox').nth(2).fill('Question Description');
  await this.page.getByRole('button', { name: 'Choose Preset' }).click();
  await this.page.click("//div[@id='Scale']")
  await this.page.getByRole('option', { name: '5' }).click();
  await this.page.click("//div[@id='Preset Type']");
  await this.page.getByRole('option', { name: 'Willingness' }).click();
  await this.page.getByRole('button', { name: 'Choose Preset' }).click();
  await this.page.getByRole('button', { name: 'Save' }).click();
  await this.page.getByRole('button', { name: 'Done' }).click();
// Creates a multi-select question as a group question
  await this.page.locator("//p[normalize-space()='Group Question']").click()
  await this.page.getByRole('button', { name: 'Add Question' }).click();
  await this.page.getByRole('button', { name: 'Multi Select' }).click();
  await this.page.getByPlaceholder('Enter question code', { exact: true }).fill('Q9');
  await this.page.getByPlaceholder('Enter question', { exact: true }).fill('What is the preferred mode of transportation?');
  await this.page.locator('.remirror-is-empty').click();
  await this.page.locator('.ProseMirror').fill('Please answer the above question.');
  await this.page.locator('button[name="addButton"]').click();
  await this.page.locator('button[name="addButton"]').first().click();
  await this.page.locator('button[name="addButton"]').first().click();
  await this.page.getByPlaceholder('Enter option').first().fill('Car');
  await this.page.getByPlaceholder('Enter code').first().fill('1');
  await this.page.getByPlaceholder('Enter option').nth(1).fill('Bike');
  await this.page.getByPlaceholder('Enter code').nth(1).fill('2');
  await this.page.getByPlaceholder('Enter option').nth(2).fill('Bus');
  await this.page.getByPlaceholder('Enter code').nth(2).fill('3');
  await this.page.getByPlaceholder('Enter option').nth(3).fill('Metro');
  await this.page.getByPlaceholder('Enter code').nth(3).fill('4');
  await this.page.getByRole('button', { name: 'Save' }).click();
  await this.page.getByRole('button', { name: 'Done' }).click();
  await setViewPort(this.page, ".css-o0o90z") 
  await expect(this.page.locator('.css-o0o90z').first()).toHaveScreenshot('Question_scroll.png',{maxDiffPixelRatio:0.05});
  await resetViewPort(this.page)
  await expect(this.page).toHaveScreenshot('Edit_questionnaire_page.png',{mask:[this.page.locator('.css-3j596c')],maxDiffPixelRatio:0.05});
  await this.page.getByRole('button', { name: 'Q7 Group Question Group' }).click();
  await expect(this.page.getByPlaceholder('Enter question', { exact: true })).toHaveValue('Group Question');
  await expect(this.page.locator('.MuiStack-root > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div').first()).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Q8 Single Select Visible Tell' })).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Q9 Multi Select Visible What' })).toBeVisible();
}
async validateErrorsInQuestionnairePage(){
  await this.page.click(this.addNewQuestionButton);
  await this.page.getByRole('button', { name: 'Single Select' }).click();
  await this.page.getByPlaceholder('Enter question', { exact: true }).fill('What are you doing');
  await this.page.getByRole('button', { name: 'Save' }).click();
  await expect(this.page.locator('#root')).toContainText('Please ensure that all the required fields are filled in before saving the question.');
  await this.page.getByPlaceholder('Enter code').fill('1');
  await this.page.getByRole('button', { name: 'Save' }).click();
  await expect(this.page.locator('#root')).toContainText('Please ensure that the question code is unique.');
  await this.page.locator('.MuiInputBase-root').first().click();
  await this.page.getByPlaceholder('Enter question code').fill('Q100');
  await this.page.locator('button[name="addButton"]').click();
  await this.page.getByPlaceholder('Enter code').nth(1).fill('1');
  await this.page.getByRole('button', { name: 'Save' }).click();
  await expect(this.page.locator('#root')).toContainText('Please ensure that the option code is unique.');
  await expect(this.page.getByText('Enter unique code.').first()).toBeVisible();
  await expect(this.page.locator('#root')).toContainText('Enter unique code.');
}

async validateErrorsInQuestionnairePageArchiveProject(){
  await this.page.click(this.addNewQuestionButton);
  await this.page.getByRole('button', { name: 'Single Select' }).click();
  await this.page.getByPlaceholder('Enter code').fill('1');
  await this.page.getByRole('button', { name: 'Save' }).click();
  await expect(this.page.getByRole('heading')).toContainText('Failed to Delete Question');
  await expect(this.page.getByLabel('Failed to Delete Question')).toContainText('The project has been archived, no further modifications can be made.');
  await expect(this.page.getByRole('img')).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Go to Home' })).toBeVisible();
  }


async uploadRules(csv_filepath) {
    await this.page.getByRole("button", { name: "Upload Rules" }).click();
    await expect(this.page.getByRole("heading")).toContainText("Upload Rules");
    await expect(this.page.getByLabel("Upload Rules")).toContainText(
      "Ensure that your CSV follows the template's column structure to avoid errors. Use the pre-defined template for the correct structure, as other files may not be compatible."
    );
    await expect(this.page.getByLabel("Upload Rules")).toContainText(
      "*Please note: For column headers with spaces/special characters, enclose the phrases in double quotes, e.g., “Experience (Years)”."
    );
    await expect(
      this.page.getByRole("button", { name: "Download Template" })
    ).toBeVisible();
    await this.page.locator("#input-file-upload").setInputFiles(csv_filepath);
    await expect(this.page.getByLabel("Upload Rules")).toContainText(
      "File uploaded successfully."
    );
    await expect(
      this.page.getByRole("button", { name: "Validate Rules" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Validate Rules" }).click();
    await expect(this.page.getByLabel("File Validation")).toContainText(
      "The file validation has been successfully completed."
    );
    await this.page.getByRole("button", { name: "Done" }).click();
  }
}
