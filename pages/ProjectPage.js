const { expect } = require("@playwright/test");
export class Projectpage {
  constructor(page) {
    this.page = page;
    this.createNewSurveybutton = 'button[name="Create New Survey"]';
  }

  async createNewSurvey(surveyname) {
    await this.page.locator(this.createNewSurveybutton).click();
    await this.page.getByPlaceholder("Enter survey name").fill(surveyname);
    await this.page.getByRole("button", { name: "Create Survey" }).click();
    await expect(this.page.locator("#root")).toContainText(surveyname);
    await this.page.waitForTimeout(1000);
    await expect(this.page).toHaveScreenshot('Create_questionnaire_page.png',{maxDiffPixelRatio:0.05,mask:[this.page.locator("//p[contains(text(),'Demo')]")]});
  }

  async validateProjectPageUI() {
    await expect(this.page.getByRole("tab", { name: "Surveys" })).toBeVisible();
    await expect(
      this.page.getByRole("tab", { name: "Respondents" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("tab", { name: "Dashboard" })
    ).toBeVisible();
    await expect(this.page.getByRole("tab", { name: "Reports" })).toBeVisible();
    await expect(
      this.page.getByRole("tab", { name: "User Access" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("tab", { name: "Settings" })
    ).toBeVisible();
    await expect(
      this.page
        .locator("div")
        .filter({ hasText: /^Surveys$/ })
        .getByRole("paragraph")
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Create New Survey" }).first()
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Create New Survey" }).first()
    ).toBeEnabled();
    // Validates the presence of project name and the dates.
    await expect(this.page.locator(".css-2j5iyq")).toBeVisible();
  }

  async openSurvey(surveyname) {
    await this.page
      .locator(
        `(//div[@class='MuiStack-root css-1nuh8la'])[contains(.,'${surveyname}')]//button[2]`
      )
      .click();
    await this.page.waitForTimeout(1000);
  }

  async navigateToRespondentTab() {
    await this.page.getByRole("tab", { name: "Respondents" }).click();
    await this.page.waitForTimeout(1000);
  }
}
