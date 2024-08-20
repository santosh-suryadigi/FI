const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';

test.beforeEach('Login',async ({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()

})

test('CreateNewSurvey', async ({ page }) => {
    const project = new Homepage(page)
    const survey = new Projectpage(page)
    //opens an existing project
    await project.openExistingProject('Demo Project 28') 
    //creates a new survey in the existing project
    await survey.createNewSurvey('Employee Satisfaction 5 Survey')
});

test('OpenSurvey', async ({page})=>{
    const survey = new Projectpage(page)
    const project = new Homepage(page)
    await project.openExistingProject('Demo Project 28') 
    await survey.openSurvey('HR Survey')
})