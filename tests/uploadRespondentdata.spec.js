const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';
import { RespondentPage } from '../pages/Respondentpage';

test.beforeEach('Login & navigate to Respondent page', async ({ page }) => {
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
    const home = new Homepage(page)
    const project = new Projectpage(page)
    //opens an existing project
    await home.openExistingProject('Performance Test 9')
    await project.navigateToRespondentTab()
})

test('Upload Respondent data for the first time', async ({ page }) => {
    const respondent = new RespondentPage(page)
    await respondent.validateRespondentPageFirsttime()
    await respondent.downloadRespondentTemplateFile()
    await respondent.uploadRespondentData('./testdata/Respondent_data.csv')
    // await respondent.verifyUploadedRespondentData()
    // await respondent.reuploadRespondentData()
    // await respondent.downloadRespondentdata()

});

