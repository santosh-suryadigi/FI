const { test } = require("@playwright/test");
import { Loginpage } from "../pages/LoginPage";
import { Projectpage } from "../pages/ProjectPage";
import { Homepage } from "../pages/HomePage";
import { Surveypage } from "../pages/SurveyPage";
import { createSingleSelectQuestion } from "../pages/SingleSelectQuestion";
import { createMultiSelectQuestion } from "../pages/MultiSelectQuestion";
import { createGridQuestion } from '../pages/GridQuestion'
import { createMessageQuestion } from '../pages/MessageQuestion';
import { createRankingQuestion } from '../pages/RankingQuestion';
import {createGroupQuestion, createSubGroupQuestion} from '../pages/GroupQuestion'
import {createOpenEndedQuestion} from '../pages/OpenEndedQuestion'
import { addSurveyQuestionErrorMock } from '../pages/AddSurveyQuestionMockErrors';
import { maxNoOfOptions } from "../pages/AddSurveyQuestionCommonUtils";
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
  // await createSingleSelectQuestion(page)
  await maxNoOfOptions(page)
});

