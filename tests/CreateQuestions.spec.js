const { test } = require("@playwright/test");
import { Loginpage } from "../pages/LoginPage";
import { Projectpage } from "../pages/ProjectPage";
import { Homepage } from "../pages/HomePage";
import { Surveypage } from "../pages/SurveyPage";
import { createSingleSelectQuestion } from "../pages/SingleSelectQuestion";

test.beforeEach(
  "Login & Navigate To Survey Questionnaire Page ",
  async ({ page }) => {
    const login = new Loginpage(page);
    await login.navigateToLoginPage();
    await login.login();
    const project = new Homepage(page);
    const survey = new Projectpage(page);
    const surveyquestion = new Surveypage(page);
    // Opens an existing project
    await project.openExistingProject("Demo Project 107");
    // Opens an existing survey
    await survey.openSurvey("HR Survey");
    await surveyquestion.navigateToEditQuestionnairePage();
  }
);

test("Create Question", async ({ page }) => {
  const surveyquestion = new Surveypage(page);
  await createSingleSelectQuestion(page)
});

