const { test } = require("@playwright/test");
import { Utils } from "../pages/Utils";
import { RespondentPage } from "../pages/Respondentpage";

test.beforeEach("Login & Navigate To Respondent Page", async ({ page }) => {
  const utils = new Utils();
  // Login and navigate to respondent page of a project
  utils.loginAndNavigateToRespondentTab("Automation 4", page);
});

test.setTimeout(600000);
test("Delete Column", async ({ page }) => {
  const respondent = new RespondentPage(page);
  // Validates the UI of the delete column flow
  await respondent.validateDeleteColumnFlowUI();
  // Deletes 98 columns one by one
  await respondent.deleteColumn();
});
