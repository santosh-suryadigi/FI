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
    await home.openExistingProject('Demo Project 63')
    await project.navigateToRespondentTab()
})

test('Assign all the repsondents', async ({ page }) => {
    const respondent = new RespondentPage(page)
    // assigns all the respondnets in the project to a survey
    await respondent.assignAllRespondents()
})




