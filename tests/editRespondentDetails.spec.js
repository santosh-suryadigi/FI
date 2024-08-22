const { test, expect } = require("@playwright/test");
import { Utils } from '../pages/Utils';
import { RespondentPage } from "../pages/Respondentpage";

test.beforeEach('Login & Navigate To Respondent Page', async ({ page }) => {
    const utils = new Utils();
    // Login and navigate to respondent page of a project
    utils.loginAndNavigateToRespondentTab("Demo Project 64", page);
})

test.setTimeout(600000);
test("Edit Details of an Existing Respondent", async ({ page }) => {
  const respondent = new RespondentPage(page);
  // Edits the first name and last name of 20 respondents one by one
  await respondent.editRespondentDetails();
});
