const { test } = require("@playwright/test");
import { Utils } from '../pages/Utils';
import { RespondentPage } from "../pages/RespondentPage";

test.beforeEach('Login & Navigate To Respondent Page', async ({ page }) => {
    const utils = new Utils();
    // Login and navigate to respondent page of a project
    utils.loginAndNavigateToRespondentTab("Automation 5", page);
})

test("Upload Respondent Data For The First Time", async ({ page }) => {
  const respondent = new RespondentPage(page);
  // Validates the UI of the respondent page with no data
  await respondent.validateRespondentPageFirsttime();
  // Downloads the respondent template fle
  await respondent.downloadRespondentTemplateFile();
  // Uploads the respondent data for the first time
  await respondent.uploadRespondentData("./testdata/Respondent_data.csv");
});
