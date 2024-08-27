const { test} = require('@playwright/test')
import { Loginpage } from '../pages/Loginpage';
import { Projectpage } from '../pages/Projectpage';
import { Homepage } from '../pages/Homepage';
import { Surveypage } from '../pages/Surveypage';

test.beforeEach('Login And Navigate To Home Page',async({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
})
test.setTimeout(60000)
test('Survey Questionnaire Creation flow', async ({ page }) => {
    const login = new Loginpage(page)
    const project = new Homepage(page)
    const survey = new Projectpage(page)
     // Get current time as numbers only
    const currentTime = new Date().toISOString().replace(/[^0-9]/g, '');
    const projectName = `AT - DemoProject- ${currentTime}`;
    // Creates a new project
    await project.createNewProject(projectName) 
    // Creates and opens a new survey in the project
    await survey.createNewSurvey('Employee Satisfaction')
    const question = new Surveypage(page);
    // Creates questions
    await question.createSingleSelectQuestion();
    await question.createMultiSelectQuestion();
    await question.createOpenEndedQuestion()
    await question.createGridQuestion()
    // Navigating back to the home page
    await login.navigateToHomePage()
    await project.archiveProject(projectName)
});