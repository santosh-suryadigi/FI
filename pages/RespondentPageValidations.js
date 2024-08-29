const { expect } = require("@playwright/test");

export class RespondentPageValidations {
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
  
  async verifyRespondentPageNotFirstime() {
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
}