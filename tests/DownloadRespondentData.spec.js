const { test } = require('@playwright/test')
import { Utils } from '../pages/Utils';
import { RespondentPage } from '../pages/RespondentPage';

test.beforeEach('Login & Navigate To Respondent Page', async ({ page }) => {
    const utils = new Utils();
    // Login and navigate to respondent page of a project
    utils.loginAndNavigateToRespondentTab("Demo Project 64", page);
})

test('Download The Respondent CSV File', async ({ page }) => {
    const respondent = new RespondentPage(page)
    // Downloads the respondent csv file
    await respondent.downloadRespondentdata()
})
