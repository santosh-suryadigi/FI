const { test, expect } = require("@playwright/test");
import { Loginpage } from "../pages/Loginpage";
import { Projectpage } from "../pages/Projectpage";
import { Homepage } from "../pages/Homepage";
import { Surveypage } from "../pages/Surveypage";

test.beforeEach("Login & Navigate To Respondent Page", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
  const survey = new Projectpage(page);
  const project = new Homepage(page);
  // Opens an existing project
  await project.openExistingProject("Automation 1");
  await survey.openSurvey("HR Survey");
});

test("Upload Rules", async ({ page }) => {
  const question = new Surveypage(page);
  // Upload rules to a survey
  await question.uploadRules("./testdata/Upload_rules.csv");
});
