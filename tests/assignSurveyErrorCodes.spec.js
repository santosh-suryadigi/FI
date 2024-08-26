const { test } = require("@playwright/test");
import { RespondentPage } from "../pages/Respondentpage";
import { Utils } from "../pages/Utils";

test("Error Codes-1", async ({ page }) => {
  const utils = new Utils();
  // Login and navigate to respondent page of a project
  utils.loginAndNavigateToRespondentTab("Demo Project 28", page);
  const respondent = new RespondentPage(page);
  // Assigns a single respondents who is already assigned
  await respondent.assignAlreadyAssignedRespondents();
  // Assigns multiple respondents who are already assigned
  await respondent.assignMultiAssignedRespondents();
  // Assigns respondents to a closed survey
  await respondent.assignClosedSurvey();
  // Assigns respondents to a survey with no questions
  await respondent.assignSurveyWithNoQuestions();
});

test("Error Codes-2", async ({ page }) => {
  const utils = new Utils();
  // Login and navigate to the respondent tab in an archived project
  utils.loginAndNavigateToRespondentTabInArchiveProject(
    "Demo Project 50 - clone",
    page
  );
  const respondent = new RespondentPage(page);
  // Assigns respondents to a survey that belongs to an archived project
  await respondent.assignSurveyOfArchivedProject();
});
