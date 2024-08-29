const { expect } = require("@playwright/test");

export class AssignSurvey {
  constructor(page) {
    this.page = page;
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