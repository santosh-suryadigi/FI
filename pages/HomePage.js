const { expect } = require("@playwright/test");
export class Homepage {
  constructor(page) {
    this.page = page;
  }

  async createNewProject(projectname) {
    const startdate = "10";
    const enddate = "15";
    await this.page.getByRole("button", { name: "Create New Project" }).click();
    await this.page.getByPlaceholder("Enter project name").fill(projectname);
    await this.page.getByLabel("Choose date").first().click();
    await this.page.getByLabel("Next month").click();
    await this.page
      .locator(`//button[@role='gridcell'][contains(text(),${startdate})]`)
      .first()
      .click();
    await this.page.getByLabel("Choose date", { exact: true }).click();
    await this.page
      .locator(`//button[@role='gridcell'][contains(text(),${enddate})]`)
      .first()
      .click();
    await this.page.getByRole("button", { name: "Create Project" }).click();
    await this.page.waitForTimeout(1000);
    await expect(this.page.locator("#root")).toContainText(projectname);
  }

  async openExistingProject(projectname) {
    await this.page.getByText(projectname).click();
  }

  async archiveProject(projectname) {
    await this.page
      .locator(" //tbody/tr[1]/td[6]/div[1]/div[1]/button[1]")
      .click();
    await this.page
      .getByPlaceholder("Enter project name")
      .fill(`${projectname}`);
    await this.page.getByRole("button", { name: "Archive Project" }).click();
  }

  async openArchiveProjects() {
    await this.page.getByRole("tab", { name: "Archived Projects" }).click();
  }

  async validateHomePageUI() {
    await expect(this.page.locator(".css-98onik")).toBeVisible();
    await expect(this.page.locator('button[name="manageUsers"]')).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Create New Project" })
    ).toBeVisible();
    await expect(
      this.page.getByText("Projects", { exact: true })
    ).toBeVisible();
    await expect(
      this.page.getByRole("tab", { name: "Active Projects" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("tab", { name: "Archived Projects" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Add Filter" })
    ).toBeVisible();
    await expect(
      this.page.locator("//nav[@aria-label='pagination navigation']").first()
    ).toBeVisible();
    await expect(this.page.locator(".css-j0q4xf").first()).toBeVisible();
    // Verifies the presence of the tabel
    await expect(this.page.locator(".css-77b98a")).toBeVisible();
    await expect(this.page.locator("thead")).toContainText("Project");
    await expect(this.page.locator("thead")).toContainText("Creator");
    await expect(this.page.locator("thead")).toContainText("Created On");
    await expect(this.page.locator("thead")).toContainText("Last Modified");
    await expect(this.page.locator("thead")).toContainText("Surveys");
    await expect(this.page.locator(".css-1g2fg5z")).toHaveCount(20);
  }
}
