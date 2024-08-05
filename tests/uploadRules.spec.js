const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';
import { Surveypage } from '../pages/Surveypage';

test.beforeEach('Login and Navigate to Survey',async ({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
    const survey = new Projectpage(page)
    const project = new Homepage(page)
    await project.openExistingProject('Demo Project 28') 
    await survey.openSurvey('HR Survey')

})

test('Upload Rules', async ({page})=>{
const question = new Surveypage(page)
await question.uploadRules('./testdata/Upload_rules.csv')
})