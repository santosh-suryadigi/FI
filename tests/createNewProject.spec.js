const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Homepage } from '../pages/Homepage';
import { Projectpage } from '../pages/Projectpage';

test('CreateNewProject', async ({ page }) => {

    const login = new Loginpage(page)
    const project = new Homepage(page)
    const survey = new Projectpage(page)

    await login.navigateToLoginPage()
    await login.Login()
    //creates a new project
    await project.createNewProject('Demo Project 30')
    //creates a new survey in the new project
    await survey.createNewSurvey('HR Survey')

    
});
