const { test } = require("@playwright/test");
import { Loginpage } from "../pages/Loginpage";
import { Projectpage } from "../pages/Projectpage";
import { Homepage } from "../pages/Homepage";
import { Surveypage } from "../pages/Surveypage";
test.beforeEach(
  "Login & Navigate To Survey Questionnaire Page ",
  async ({ page }) => {
    const login = new Loginpage(page);
    await login.navigateToLoginPage();
    await login.login();
    const project = new Homepage(page);
    const survey = new Projectpage(page);
    // Opens an existing project
    await project.openExistingProject("Demo Project 28");
    // Opens an existing survey
    await survey.openSurvey("IT Survey");
  }
);

test("Create 3 Question", async ({ page }) => {
  const question = new Surveypage(page);
  // await question.createSingleSelectQuestion();
  // await question.createMultiSelectQuestion();
  // await question.createOpenEndedQuestion()
  await question.createGridQuestion()

});
test("Create 4 Question", async ({ page }) => {
  const question = new Surveypage(page);
  await question.createSingleSelectQuestion();
  // await question.createMultiSelectQuestion();
  // await question.createOpenEndedQuestion()
  // await question.createGridQuestion()

});

// test('Create A Multi Select Question', async ({ page }) => {
//     const question= new Surveypage(page)
//     await question.createMultiSelectQuestion()

// });

// test('Create An Open Ended Question', async ({ page }) => {
//     const question= new Surveypage(page)
//     await question.createOpenEndedQuestion()

// });
