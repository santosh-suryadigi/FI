const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';
import { RespondentPage } from '../pages/Respondentpage';

test.beforeEach('Login & navigate to Respondent page', async ({ page }) => {
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
      
})

test.setTimeout(60000)
test('Error codes-1', async ({page}) => {
    const home = new Homepage(page)
    const project = new Projectpage(page)
    const respondent = new RespondentPage(page)
    //opens an existing project
    await home.openExistingProject('Demo Project 28')
    await project.navigateToRespondentTab()
    await respondent.assignAlreadyAssignedRespondents()
    await respondent.assignMultiAssignedRespondents()
    await respondent.assignClosedSurvey()
    await respondent.assignSurveyWithNoQuestions()
    
});
test('Error codes-2', async ({page}) => {
    const home = new Homepage(page)
    const project = new Projectpage(page)
    const respondent = new RespondentPage(page)
    //opens an existing project
    await home.openArchiveProjects()
    await home.openExistingProject('demo project 16')
    await project.navigateToRespondentTab()
    await respondent.assignSurveyOfArchivedProject()
});





