const { test, expect } = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';


test('CreateNewProject', async ({ page }) => {

    const login = new Loginpage(page)
    const project = new Homepage(page)
    const survey = new Projectpage(page)

    await login.navigateToLoginPage()
    await login.Login()
    //opens an existing project
    await project.openExistingProject('Demo Project 25') 
    //creates a new survey in the new project
    await survey.createNewSurvey('IT Survey')

    
});
