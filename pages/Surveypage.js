const { test, expect } = require("@playwright/test");

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
    await this.page.getByRole("button", { name: "Add New Question" }).click();
    await this.page.getByRole("button", { name: "Single Select" }).click();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Tell more about the company");
    await this.page.getByRole("textbox").nth(2).fill("Question Description");
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await this.page.click("//div[@id='Scale']");
    await this.page.getByRole("option", { name: "5" }).click();
    await this.page.click("//div[@id='Preset Type']");
    await this.page.getByRole("option", { name: "Willingness" }).click();
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await this.page.getByRole("button", { name: "Save" }).click();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async createSingleSelectQuestionmock() {
    if (await this.page.isVisible(this.createQuestionnaireButton)) {
      await this.page.locator(this.createQuestionnaireButton).click();
    } else {
      await this.page.click(this.editQuestionnaire);
    }
    await this.page.getByRole("button", { name: "Add New Question" }).click();
    await this.page.getByRole("button", { name: "Single Select" }).click();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Tell more about the company");
    await this.page.getByRole("textbox").nth(2).fill("Question Description");
    await this.page.getByRole("button", { name: "Choose Preset" }).click();
    await this.page.click("//div[@id='Scale']");
    await this.page.getByRole("option", { name: "5" }).click();
    await this.page.click("//div[@id='Preset Type']");
    await this.page.getByRole("option", { name: "Willingness" }).click();
    await this.page.getByRole("button", { name: "Choose Preset" }).click();

    await this.page.route("*/**/survey/AddSurveyQuestion", async (route) => {
      const json = {
        meta: {
          status: "OK",
        },
        response: {
          surveyDetailsAndQuestions: {
            surveyStatusAndName: {
              surveyStatus: {
                case: "DRAFT",
              },
              surveyName: {
                name: "HR Survey",
              },
            },
            surveyQuestionDetails: [
              {
                questionId: "037fefa4-f305-493e-acd2-0df8f8eceed6",
                questionCode: {
                  code: "Q1",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 1,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "9ecbce94-54a6-4594-8c37-71b08487cf93",
                questionCode: {
                  code: "Q2",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 2,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "c8ef335d-f078-4474-b341-f2e1e822a61b",
                questionCode: {
                  code: "Q3",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 3,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "4979ab55-3ed0-4dd7-a579-6324f357e0d7",
                questionCode: {
                  code: "Q4",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 4,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "838d9d19-76a3-4227-b781-c69eda66c7bd",
                questionCode: {
                  code: "Q5",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 5,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "f54f28a2-4050-4774-aeb5-ebc23bd05e86",
                questionCode: {
                  code: "Q6",
                },
                questionType: {
                  case: "OPEN_ENDED",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 6,
                },
                isQuestionVisible: true,
                isRuleApplied: false,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "f2ee72cf-012e-4a58-8fef-3c890235bd42",
                questionCode: {
                  code: "Q7",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "Verify that the user can interact with all input elements by performing the following text.",
                },
                order: {
                  order: 7,
                },
                isQuestionVisible: true,
                isRuleApplied: false,
                childQuestionIds: [],
                isMandatory: false,
              },
            ],
          },
          questionId: "f2ee72cf-012e-4a58-8fef-3c890235bd42",
        },
      };
      await route.fulfill({ json });
    });

    await this.page.route("*/**/survey/GetQuestionDetails", async (route) => {
      const json = {
        meta: {
          status: "OK",
        },
        response: {
          questionDetails: {
            basicQuestionDetails: {
              questionCode: {
                code: "Q8",
              },
              question: {
                text: "What role(s) do you see yourself playing in the company within the next five years?",
              },
              isMandatory: false,
              isVisibleByDefault: true,
            },
            questionDetailsJSON:
              '{"options":[{"code":{"code":"1"},"option":{"text":"Poor"}},{"code":{"code":"2"},"option":{"text":"Fair"}},{"code":{"code":"3"},"option":{"text":"Good"}}],"singleChoiceDisplayType":{"case":"RADIO_BUTTON"},"isChoiceResetAllowed":true}',
            jsonVersion: {
              version: 1,
            },
          },
          surveyDetailsAndQuestions: {
            surveyStatusAndName: {
              surveyStatus: {
                case: "DRAFT",
              },
              surveyName: {
                name: "HR Survey",
              },
            },
            surveyQuestionDetails: [
              {
                questionId: "037fefa4-f305-493e-acd2-0df8f8eceed6",
                questionCode: {
                  code: "Q1",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 1,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "9ecbce94-54a6-4594-8c37-71b08487cf93",
                questionCode: {
                  code: "Q2",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 2,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "c8ef335d-f078-4474-b341-f2e1e822a61b",
                questionCode: {
                  code: "Q3",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 3,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "4979ab55-3ed0-4dd7-a579-6324f357e0d7",
                questionCode: {
                  code: "Q4",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 4,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "838d9d19-76a3-4227-b781-c69eda66c7bd",
                questionCode: {
                  code: "Q5",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 5,
                },
                isQuestionVisible: true,
                isRuleApplied: true,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "f54f28a2-4050-4774-aeb5-ebc23bd05e86",
                questionCode: {
                  code: "Q6",
                },
                questionType: {
                  case: "OPEN_ENDED",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 6,
                },
                isQuestionVisible: true,
                isRuleApplied: false,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "f2ee72cf-012e-4a58-8fef-3c890235bd42",
                questionCode: {
                  code: "Q7",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "Verify that the user can interact with all input elements by performing the following text.",
                },
                order: {
                  order: 7,
                },
                isQuestionVisible: true,
                isRuleApplied: false,
                childQuestionIds: [],
                isMandatory: false,
              },
              {
                questionId: "2137aecf-ba9f-48bf-8243-9aeb1223f106",
                questionCode: {
                  code: "Q8",
                },
                questionType: {
                  case: "SINGLE_CHOICE",
                },
                question: {
                  text: "What role(s) do you see yourself playing in the company within the next five years?",
                },
                order: {
                  order: 8,
                },
                isQuestionVisible: true,
                isRuleApplied: false,
                childQuestionIds: [],
                isMandatory: false,
              },
            ],
          },
        },
      };
      await route.fulfill({ json });
    });

    await this.page.getByRole("button", { name: "Save" }).click();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async createMultiSelectQuestion() {
    // if (await this.page.isVisible(this.createQuestionnaireButton)) {
    //   await this.page.locator(this.createQuestionnaireButton).click();
    // } else {
    //   await this.page.click(this.editQuestionnaire);
    // }

    await this.page.getByRole("button", { name: "Add New Question" }).click();
    await this.page.getByRole("button", { name: "Multi Select" }).click();
    await this.page.getByPlaceholder("Enter question", { exact: true }).click();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("What is the preferred mode of transportation?");
    await this.page.locator(".remirror-is-empty").click();
    await this.page
      .locator(".ProseMirror")
      .fill("Please answer the above question.");
    await this.page.locator('button[name="addButton"]').click();
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
    await this.page.getByRole("button", { name: "Save" }).click();
    await this.page.getByRole("button", { name: "Done" }).click();
  }

  async createOpenEndedQuestion() {
    // if (await this.page.isVisible(this.createQuestionnaireButton)) {
    //   await this.page.locator(this.createQuestionnaireButton).click();
    // } else {
    //   await this.page.click(this.editQuestionnaire);
    // }

    await this.page.getByRole("button", { name: "Add New Question" }).click();
    await this.page.getByRole("button", { name: "Open Ended" }).click();
    await this.page.getByPlaceholder("Enter question", { exact: true }).click();
    await this.page
      .getByPlaceholder("Enter question", { exact: true })
      .fill("Please enter your answers in the below fields");
    await this.page.locator('button[name="addButton"]').click();
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
    await this.page.getByRole("button", { name: "Save" }).click();
    await this.page.getByRole("button", { name: "Done" }).click();
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
