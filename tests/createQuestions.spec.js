const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';
import { Surveypage } from '../pages/Surveypage';

test.beforeEach('Login & navigate to Survey questionnaire page ',async ({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
    const project = new Homepage(page)
    const survey = new Projectpage(page)
    //opens an existing project
    await project.openExistingProject('Demo Project 28') 
    await survey.openSurvey('HR Survey')

})

test('Create SingleSelect Question', async ({ page }) => {
    const question= new Surveypage(page)
    await question.createSingleSelectQuestion()
    
});

test('Create MultiSelect Question', async ({ page }) => {
    const question= new Surveypage(page)
    await question.createMultiSelectQuestion()
    
});

test('Create OpenEnded Question', async ({ page }) => {
    const question= new Surveypage(page)
    await question.createOpenEndedQuestion()
    
});

