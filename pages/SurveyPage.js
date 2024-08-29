const { expect } = require("@playwright/test");
import {
  resetViewPort,
  setViewPort,
} from "../tests/utils/viewPortScreenShotUtils";

export class Surveypage {
  constructor(page) {
    this.page = page;
    this.createQuestionnaireButton = 'button[name="createQuestionnaire"]';
    this.editQuestionnaireButton = '//button[contains(.,"Edit Questionnaire")]';
    this.addNewQuestionButton = "//button[@name='addNewQuestion']";
    this.addSubQuestionButton = "//button[@name='addQuestion']";
  }

  async navigateToEditQuestionnairePage() {
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaireButton);
    }
  }

  async validateErrorsInQuestionnairePage() {
    await this.page.click(this.addNewQuestionButton);
    await this.page.getByRole("button", { name: "Single Select" }).click();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("What are you doing");
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator("#root")).toContainText(
      "Please ensure that all the required fields are filled in before saving the question."
    );
    await this.page.getByPlaceholder("Enter code").fill("1");
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator("#root")).toContainText(
      "Please ensure that the question code is unique."
    );
    await this.page.locator(".MuiInputBase-root").first().click();
    await this.page.getByPlaceholder("Enter question code").fill("Q100");
    await this.page.locator('button[name="addButton"]').click();
    await this.page.getByPlaceholder("Enter code").nth(1).fill("1");
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.locator("#root")).toContainText(
      "Please ensure that the option code is unique."
    );
    await expect(
      this.page.getByText("Enter unique code.").first()
    ).toBeVisible();
    await expect(this.page.locator("#root")).toContainText(
      "Enter unique code."
    );
  }

  async validateErrorsInQuestionnairePageArchiveProject() {
    await this.page.click(this.addNewQuestionButton);
    await this.page.getByRole("button", { name: "Single Select" }).click();
    await this.page.getByPlaceholder("Enter code").fill("1");
    await this.page.getByRole("button", { name: "Save" }).click();
    await expect(this.page.getByRole("heading")).toContainText(
      "Failed to Delete Question"
    );
    await expect(
      this.page.getByLabel("Failed to Delete Question")
    ).toContainText(
      "The project has been archived, no further modifications can be made."
    );
    await expect(this.page.getByRole("img")).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Go to Home" })
    ).toBeVisible();
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
