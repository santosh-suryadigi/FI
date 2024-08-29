const { test } = require('@playwright/test')
import { Utils } from '../pages/Utils';
import { RespondentPage } from '../pages/RespondentPage';

test.beforeEach('Login & Navigate To Respondent Page', async ({ page }) => {
    const utils = new Utils();
    // Login and navigate to respondent page of a project
    utils.loginAndNavigateToRespondentTab("Automation 1", page);
})
test('Reupload Respondent Data', async ({ page }) => {
    const respondent = new RespondentPage(page)
    // Reupload respondent data
    await respondent.reuploadRespondentData('./testdata/Respondent_data.csv')
})
