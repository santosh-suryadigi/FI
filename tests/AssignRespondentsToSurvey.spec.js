const { test } = require("@playwright/test");
import { Utils } from "../pages/Utils";
import { RespondentPage } from "../pages/RespondentPage";

test.setTimeout(60000);
test("Assign All The Respondents", async ({ page }) => {
  const utils = new Utils();
  // Login and navigate to respondent page of a project
  utils.loginAndNavigateToRespondentTab("Demo Project 63", page);
  const respondent = new RespondentPage(page);
  // Assigns all the respondents in the project to a survey
  await respondent.assignAllRespondents();
});

test("Assign Single And Multiple Respondents", async ({ page }) => {
  const utils = new Utils();
  // Login and navigate to respondent page of a project
  utils.loginAndNavigateToRespondentTab("Demo Project 64", page);
  const respondent = new RespondentPage(page);
  // Assigns a single respondent to 5 different surveys
  await respondent.assignSingleRespondent();
  // Assigns 6 respondents to a single survey
  await respondent.assignMultiRespondents();
});
