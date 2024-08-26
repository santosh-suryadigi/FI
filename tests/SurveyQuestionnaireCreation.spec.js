const { test} = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';
import { Surveypage } from '../pages/Surveypage';

test.beforeAll('Login And Navigate To Home Page',async({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.validateLoginPageUI()
    await login.login()
})

test('Survey Questionnaire Creation flow', async ({ page }) => {
    const login = new Loginpage(page)
    const project = new Homepage(page)
    await project.validateHomePageUI()
    const survey = new Projectpage(page)
    // Creates a new project
    await project.createNewProject('Demo Project 106') 
    // Validates the tabs present in a project
    await survey.validateProjectPageUI()
    // Creates and opens a new survey in the project
    await survey.createNewSurvey('Employee Satisfaction')
    const question = new Surveypage(page);
    // Creates questions
    await question.createSingleSelectQuestion();
    await question.createMultiSelectQuestion();
    await question.createOpenEndedQuestion()
    // Navigating back to the home page
    await login.navigateToHomePage()
    await project.archiveProject('Demo Project 106')
});