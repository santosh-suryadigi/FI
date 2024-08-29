const { test} = require('@playwright/test')
import { Loginpage } from '../pages/LoginPage';
import { Projectpage } from '../pages/ProjectPage';
import { Homepage } from '../pages/HomePage';
import { Surveypage } from '../pages/SurveyPage';

test.beforeEach('Login And Navigate To Home Page',async({page})=>{
    const login = new Loginpage(page)
    await login.navigateToLoginPage()
    await login.login()
})
test.setTimeout(120000)
test('Survey Questionnaire Creation flow', async ({ page }) => {
    const login = new Loginpage(page)
    const project = new Homepage(page)
    const survey = new Projectpage(page)
     // Get current time as numbers only
    const currentTime = new Date().toISOString().replace(/[^0-9]/g, '');
    const projectName = `AT - DemoProject- ${currentTime}`;
    // Creates a new project
    await project.createNewProject(projectName) 
    const surveyName ='Employee Satisfaction'
    // Creates and opens a new survey in the project
    await survey.createNewSurvey(surveyName)
    const question = new Surveypage(page);
    await question.navigateToEditQuestionnairePage()
    // Creates questions
    await question.createSingleSelectQuestion();
    await question.createMultiSelectQuestion();
    await question.createOpenEndedQuestion()
    await question.createGridQuestion()
    await question.createMessageQuestion()
    await question.createRankingQuestion()
    await question.createGroupQuestion()
    await question.createSubGroupQuestion()
    await question.validateErrorsInQuestionnairePage()
    await question.addSurveyQuestionErrorMock();
    // Navigating back to the home page
    await login.navigateToHomePage()
    // Archiveing a project
    await project.archiveProject(projectName)
});

