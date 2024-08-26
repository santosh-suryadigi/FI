const { expect } = require("@playwright/test");

export class Surveypage {
  constructor(page) {
    this.page = page;
    this.createQuestionnaireButton = 'button[name="createQuestionnaire"]';
    this.editQuestionnaire = '//button[contains(.,"Edit Questionnaire")]';
  }

  async createSingleSelectQuestion() {
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaire);
    }
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Add New Question" }).click();
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
    await expect(
      this.page.getByRole("button", { name: "Reset", exact: true })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
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
  }

  async createMultiSelectQuestion() {
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaire);
    }
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Add New Question" }).click();
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
    await this.page.getByRole("button", { name: "Multi Select" }).click();
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
    await this.page.getByPlaceholder("Enter option").first().press("Tab");
    await this.page.getByPlaceholder("Enter code").first().fill("1");
    await this.page.getByPlaceholder("Enter option").nth(1).fill("Bike");
    await this.page.getByPlaceholder("Enter option").nth(1).press("Tab");
    await this.page.getByPlaceholder("Enter code").nth(1).fill("2");
    await this.page.getByPlaceholder("Enter option").nth(2).fill("Bus");
    await this.page.getByPlaceholder("Enter option").nth(2).press("Tab");
    await this.page.getByPlaceholder("Enter code").nth(2).fill("3");
    await this.page.getByPlaceholder("Enter option").nth(3).fill("Metro");
    await this.page.getByPlaceholder("Enter option").nth(3).press("Tab");
    await this.page.getByPlaceholder("Enter code").nth(3).fill("4");
    await expect(
      this.page.getByRole("button", { name: "Reset", exact: true })
    ).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
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
  }

  async createOpenEndedQuestion() {
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaire);
    }
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Add New Question" }).click();
    await expect(this.page.locator("//div[@role='dialog']")).toBeVisible();
    await this.page.getByRole("button", { name: "Open Ended" }).click();
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
    await this.page
      .getByPlaceholder("Enter title for the field")
      .first()
      .press("Tab");
    await this.page.getByPlaceholder("Enter code").first().fill("1");
    await this.page
      .getByPlaceholder("Enter title for the field")
      .nth(1)
      .fill("Field Entry 2");
    await this.page
      .getByPlaceholder("Enter title for the field")
      .nth(1)
      .press("Tab");
    await this.page.getByPlaceholder("Enter code").nth(1).fill("2");
    await this.page
      .getByPlaceholder("Enter title for the field")
      .nth(2)
      .fill("Field Entry 3");
    await this.page
      .getByPlaceholder("Enter title for the field")
      .nth(2)
      .press("Tab");
    await this.page.getByPlaceholder("Enter code").nth(2).fill("3");
    await expect(this.page.getByRole("button", { name: "Save" })).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Save" })).toBeEnabled();
    await this.page.getByRole("button", { name: "Save" }).click();
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
  }

  async createGridQuestion() {
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaire);
    }
    await expect(
      this.page.getByRole("button", { name: "Add New Question" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Add New Question" }).click();
    await this.page.getByRole("button", { name: "Grid" }).click();
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
