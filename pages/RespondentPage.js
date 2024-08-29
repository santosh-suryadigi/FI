const { expect } = require("@playwright/test");

export class RespondentPage {
  constructor(page) {
    this.page = page;
  }

  async validateRespondentPageFirsttime() {
    await this.page.waitForSelector(
      "(//p[@class='MuiTypography-root MuiTypography-body1 css-o0mwwd'])[1]"
    );
    await expect(this.page.getByText("Respondents").nth(1)).toBeVisible();
    await expect(this.page.getByRole("button", { name: "Test" })).toBeVisible();
    await this.page.getByRole("button", { name: "Test" }).click();
    await expect(this.page.getByText("TestLive")).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Upload CSV" }).nth(1)
    ).toBeVisible();
    await expect(
      this.page
        .locator("div")
        .filter({ hasText: /^Upload CSV$/ })
        .getByRole("button")
    ).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "No Respondents Found"
    );
    await expect(this.page.locator("#root")).toContainText(
      "No respondents have been added. Begin by uploading a CSV of respondents."
    );
    await expect(
      this.page.locator("div:nth-child(3) > div > div > div").first()
    ).toBeVisible();
  }

  async downloadRespondentTemplateFile() {
    await this.page.getByRole("button", { name: "Upload CSV" }).nth(1).click();
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.getByRole("button", { name: "Download Template" }).click();
    const download = await downloadPromise;
    await download.saveAs("./test-results/" + download.suggestedFilename());
    await this.page.getByRole("button", { name: "Cancel" }).click();
  }

  async uploadRespondentData(csv_filepath) {
    await this.page.getByRole("button", { name: "Upload CSV" }).nth(1).click();
    await expect(this.page.getByRole("dialog")).toContainText(
      "Ensure that your CSV follows the template's column structure to avoid errors. Use the pre-defined template for the correct structure, as other files may not be compatible."
    );
    await expect(
      this.page.getByRole("button", { name: "Download Template" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Cancel" })
    ).toBeVisible();
    await expect(
      this.page
        .getByRole("heading", { name: "Upload Respondent CSV" })
        .getByRole("paragraph")
    ).toBeVisible();
    // await this.page.getByRole('dialog').getByText('Browse').click();
    await this.page
      .getByRole("dialog", { name: "Upload Respondent CSV" })
      .locator("#input-file-upload")
      .setInputFiles(csv_filepath);
    await expect(this.page.getByRole("dialog")).toContainText(
      "File uploaded successfully."
    );
    await expect(
      this.page.getByRole("button", { name: "Proceed" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Proceed" }).click();
    await expect(
      this.page
        .getByRole("heading", { name: "Duplicate Validation" })
        .getByRole("paragraph")
    ).toBeVisible();
    await expect(this.page.getByRole("dialog")).toContainText(
      "Choose Unique Column"
    );
    await expect(
      this.page.locator(
        "div:nth-child(5) > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root > .MuiBox-root > div > div:nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root"
      )
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Open" }).click();
    await this.page.getByText("Email Address").click();
    await expect(
      this.page.getByRole("button", { name: "Validate" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Validate" }).click();
    await this.page.getByRole("button", { name: "Ignore and proceed" }).click();
    await expect(
      this.page.locator(".MuiTypography-root.MuiTypography-body1.css-1o7oer3")
    ).toContainText(
      "The respondent upload process has been initiated. The data will be updated shortly."
    );
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(this.page.locator("#root")).toContainText(
      "Data Processing in Progress"
    );
    await expect(this.page.locator("#root")).toContainText(
      "The respondent data is currently being processed. Please wait for a moment, and the updated information will be displayed once the processing is complete."
    );
    await expect(
      this.page.locator(".MuiBox-root > div > div").first()
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Refresh" })
    ).toBeVisible();
  }
  async verifyRespondentPageNotFirstyime() {
    await expect(
      this.page.getByRole("button", { name: "Download CSV" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Re-Upload CSV" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Add Filter" })
    ).toBeVisible();
    await expect(this.page.getByText("ID")).toBeVisible();
    await expect(this.page.getByText("First Name")).toBeVisible();
    await expect(this.page.getByText("Last Name")).toBeVisible();
    await expect(this.page.getByText("Email Address")).toBeVisible();
    await expect(
      this.page.getByRole("columnheader", { name: "Phone Number" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("columnheader", { name: "Survey", exact: true })
    ).toBeVisible();
    await expect(
      this.page.getByRole("columnheader", { name: "Survey Status" })
    ).toBeVisible();
    await expect(
      this.page.locator("td:nth-child(9) > div").first()
    ).toBeVisible();
    await expect(
      this.page.locator("(//button[@name='deleteButton'])[1]")
    ).toBeVisible();
    await expect(
      this.page.locator("(//button[@name='editButton'])[1]")
    ).toBeVisible();
    await expect(this.page.getByText("Remove All FiltersApply")).toBeVisible();
  }

  async reuploadRespondentData(csv_filepath) {
    await this.page.getByRole("button", { name: "Re-Upload CSV" }).click();
    await expect(this.page.getByRole("heading")).toContainText(
      "Upload Respondent CSV"
    );
    await expect(this.page.getByLabel("Upload Respondent CSV")).toContainText(
      "Ensure that your CSV follows the template's column structure to avoid errors. Use the pre-defined template for the correct structure, as other files may not be compatible."
    );
    await expect(this.page.getByLabel("Upload Respondent CSV")).toContainText(
      "*Please note: For column headers with spaces/special characters, enclose the phrases in double quotes, e.g., “Experience (Years)”."
    );
    await expect(
      this.page.getByRole("button", { name: "Download Template" })
    ).toBeVisible();
    await this.page
      .getByRole("dialog", { name: "Upload Respondent CSV" })
      .locator("#input-file-upload")
      .setInputFiles(csv_filepath);
    await this.page.getByText("File uploaded successfully.").click();
    await this.page.getByRole("button", { name: "Proceed" }).click();
    await expect(this.page.getByRole("heading")).toContainText(
      "Duplicate Validation"
    );
    await expect(this.page.getByLabel("Duplicate Validation")).toContainText(
      "Duplicate records have been detected in the chosen unique column. Kindly review and rectify them for data accuracy, or proceed without changes, bearing in mind that this may impact the results."
    );
    await this.page.getByRole("button", { name: "Ignore and proceed" }).click();
    await expect(this.page.getByLabel("Duplicate Validation")).toContainText(
      "The respondent upload process has been initiated. The data will be updated shortly."
    );
    await this.page.getByRole("button", { name: "Done" }).click();
    await expect(
      this.page.getByRole("button", { name: "Refresh" })
    ).toBeVisible();
    await expect(
      this.page.getByText("Data Processing in Progress")
    ).toBeVisible();
  }

  async downloadRespondentdata() {
    await this.page.getByRole("button", { name: "Download CSV" }).click();
    await expect(this.page.getByRole("heading")).toContainText("Download CSV");
    await expect(this.page.getByLabel("Download CSV")).toContainText(
      "Are you sure you want to download the respondents CSV?"
    );
    await expect(
      this.page.getByRole("button", { name: "Cancel" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Download CSV" })
    ).toBeVisible();
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.getByRole("button", { name: "Download CSV" }).click();
    const download = await downloadPromise;
    await download.saveAs("./test-results/" + download.suggestedFilename());
    await expect(
      this.page.getByText("The respondents CSV has been")
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async deleteColumn() {
    for (let i = 1; i <= 10; i++) {
      await this.page.getByRole("button", { name: "Delete Column" }).click();
      await this.page.getByPlaceholder("Select Column").click();
      await this.page.locator(`ul li[data-option-index='0']`).click();
      await this.page.getByRole("button", { name: "Delete Column" }).click();
      await this.page.getByRole("button", { name: "Done" }).click();
    }
  }

  async validateDeleteColumnFlowUI() {
    await this.page.waitForSelector("//button[@name='deleteColumn']");
    await expect(
      this.page.getByRole("button", { name: "Delete Column" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Delete Column" }).click();
    await expect(this.page.getByRole("heading")).toContainText("Delete Column");
    await this.page.getByText("This action will lead to the").click();
    await expect(this.page.getByLabel("Delete Column")).toContainText(
      "This action will lead to the deletion of the column, causing the loss of data present in the respective column."
    );
    await expect(
      this.page.getByLabel("Delete Column").locator("label")
    ).toContainText("Column *");
    await expect(
      this.page.getByRole("button", { name: "Cancel" })
    ).toBeVisible();
    await this.page.getByPlaceholder("Select Column").click();
    await this.page.locator(`ul li[data-option-index='0']`).click();
    await expect(
      this.page.getByRole("button", { name: "Delete Column" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Delete Column" }).click();
    await expect(this.page.getByRole("button", { name: "Done" })).toBeVisible();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async editRespondentDetails() {
    for (let i = 1; i <= 20; i++) {
      await this.page.locator(`(//button[@name='editButton'])[${i}]`).click();
      await this.page
        .getByLabel("Edit Respondent")
        .getByLabel("")
        .nth(1)
        .fill("sai 27");
      await this.page.locator("#text-input-field").nth(1).fill("santosh 27");
      await this.page.getByRole("button", { name: "Save Changes" }).click();
      await this.page.getByRole("button", { name: "Done" }).click();
    }
  }

  async assignSingleRespondent() {
    for (let i = 2; i <= 6; i++) {
      await this.page.locator("(//button[@name='editButton'])[9]").click();
      await this.page.locator("//div[@role='combobox']").click();
      await this.page.locator(`li:nth-child(${i})`).click();
      await this.page.getByRole("button", { name: "Save Changes" }).click();
      await this.page.getByRole("button", { name: "Done" }).click();
    }
  }
  async assignMultiRespondents() {
    await this.page.locator("td > .MuiStack-root").first().click();
    for (let i = 2; i <= 6; i++) {
      await this.page
        .locator(`tr:nth-child(${i}) > td > .MuiStack-root`)
        .first()
        .click();
    }
    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page.getByLabel("IT Survey", { exact: true }).check();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async assignMultiAssignedRespondents() {
    await this.page
      .locator(`tr:nth-child(1) > td > .MuiStack-root`)
      .first()
      .click();

    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page.getByLabel("IT Survey", { exact: true }).check();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await expect(this.page.getByRole("heading")).toContainText(
      "Respondents Already Assigned"
    );
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText(
      "Verify that the selected respondents are not currently assigned to any other survey. Please unassign them from any existing surveys before proceeding to assign them to the new survey."
    );
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText("Respondents Selected");
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText("Respondents Assigned");
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText("Respondents Not Assigned");
    await expect(
      this.page.getByRole("button", { name: "Close" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Close" }).click();
  }

  async assignAllRespondents() {
    await this.page.locator("//table//thead//tr[1]//th[1]//label").click();
    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page
      .getByLabel("Choose Survey")
      .getByText("IT Survey", { exact: true })
      .click();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async assignAlreadyAssignedRespondents() {
    await this.page
      .locator("//table//thead//tr[1]//th[1]//label")
      .first()
      .click();
    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page
      .getByLabel("Choose Survey")
      .getByText("IT Survey", { exact: true })
      .click();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await expect(this.page.getByRole("heading")).toContainText(
      "Respondents Already Assigned"
    );
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText(
      "Verify that the selected respondents are not currently assigned to any other survey. Please unassign them from any existing surveys before proceeding to assign them to the new survey."
    );
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText("Respondents Selected");
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText("Respondents Assigned");
    await expect(
      this.page.getByLabel("Respondents Already Assigned")
    ).toContainText("Respondents Not Assigned");
    await expect(
      this.page.getByRole("button", { name: "Close" })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Close" }).click();
  }

  async assignClosedSurvey() {
    // await this.page.locator('td > .MuiStack-root').first().click();
    for (let i = 2; i <= 4; i++) {
      await this.page
        .locator(`tr:nth-child(${i}) > td > .MuiStack-root`)
        .first()
        .click();
    }
    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page.getByLabel("HR Survey", { exact: true }).check();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await expect(this.page.getByLabel("Choose Survey")).toContainText(
      "This survey is closed, a survey cannot be assigned to the selected respondent(s)."
    );
    await this.page.getByRole("button", { name: "Close" }).click();
  }

  async assignSurveyWithNoQuestions() {
    // await this.page.locator('td > .MuiStack-root').first().click();
    for (let i = 2; i <= 4; i++) {
      await this.page
        .locator(`tr:nth-child(${i}) > td > .MuiStack-root`)
        .first()
        .click();
    }
    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page
      .getByLabel("Employee satisfaction survey", { exact: true })
      .check();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await expect(this.page.getByLabel("Choose Survey")).toContainText(
      "This survey does not contain any questions, please add questions before assigning the survey."
    );
    await this.page.getByRole("button", { name: "Close" }).click();
  }
  async assignSurveyOfArchivedProject() {
    await this.page
      .locator("//table//thead//tr[1]//th[1]//label")
      .first()
      .click();
    await this.page.getByRole("button", { name: "Assign to Survey" }).click();
    await this.page.getByLabel("IT Survey", { exact: true }).check();
    await this.page.getByRole("button", { name: "Assign Survey" }).click();
    await expect(this.page.getByLabel("Choose Survey")).toContainText(
      "This project has been archived, a survey cannot be assigned to the selected respondent(s)."
    );
    await this.page.getByRole("button", { name: "Close" }).click();
  }
}
