const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/Homepage';
import { Projectpage } from '../pages/Projectpage';


test.beforeEach('Login',async ({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()

})

test('CreateNewProject', async ({ page }) => {

    const project = new Homepage(page)
    const survey = new Projectpage(page)
    //creates a new project
    await project.createNewProject('Demo Project 50')
    //creates a new survey in the new project
    await survey.createNewSurvey('HR Survey')  
})

test('ArchiveProject', async ({page})=>{

    const project = new Homepage(page)
    await project.archiveProject()

})
