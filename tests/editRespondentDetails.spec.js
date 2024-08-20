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
    await home.openExistingProject('Demo Project 64')
    await project.navigateToRespondentTab()
})

test.setTimeout(600000)
test('Edit existing respondent data ', async ({ page }) => {
    const respondent = new RespondentPage(page)
    //edits the first name and last name of 30 respondents one by one
    await respondent.editRespondentDetails()
})




