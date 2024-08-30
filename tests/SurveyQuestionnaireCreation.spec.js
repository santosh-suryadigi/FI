const { test} = require('@playwright/test')
import { Loginpage } from '../pages/LoginPage';
import { Projectpage } from '../pages/ProjectPage';
import { Homepage } from '../pages/HomePage';
import { Surveypage } from '../pages/SurveyPage';
import { createSingleSelectQuestion } from '../pages/SingleSelectQuestion';
import { createMultiSelectQuestion } from '../pages/MultiSelectQuestion';
import { createGridQuestion } from '../pages/GridQuestion'
import { createMessageQuestion } from '../pages/MessageQuestion';
import { createRankingQuestion } from '../pages/RankingQuestion';
import {createGroupQuestion, createSubGroupQuestion} from '../pages/GroupQuestion'
import {createOpenEndedQuestion} from '../pages/OpenEndedQuestion'
import { addSurveyQuestionErrorMock } from '../Mock/AddSurveyQuestionMockErrors';
import { checkMaxNoOfOptions } from '../pages/AddSurveyQuestionCommonUtils';

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
    await createSingleSelectQuestion(page);
    await createMultiSelectQuestion(page);
    await createOpenEndedQuestion(page)
    await createGridQuestion(page)
    await createMessageQuestion(page)
    await createRankingQuestion(page)
    await createGroupQuestion(page)
    await createSubGroupQuestion(page)
    // Validates the edgecases like refreshing the page, clicking on other questions while creating a question
    await question.edgeCases()
    // Validates the maximum no of options and entry fields for single-select and open ended question
    await checkMaxNoOfOptions(page)
    await question.validateErrorsInQuestionnairePage()
    await addSurveyQuestionErrorMock(page);
    // Navigating back to the home page
    await login.navigateToHomePage()
    // Archiveing a project
    await project.archiveProject(projectName)
});
