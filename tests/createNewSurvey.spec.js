const { test } = require("@playwright/test");
import { Loginpage } from "../pages/Loginpage";
import { Projectpage } from "../pages/Projectpage";
import { Homepage } from "../pages/Homepage";

test.beforeEach("Login", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
});

test("Create A New Survey", async ({ page }) => {
  const project = new Homepage(page);
  const survey = new Projectpage(page);
  // Opens an existing project
  await project.openExistingProject("Demo 12");
  // Creates a new survey in the existing project
  await survey.createNewSurvey("Employee Satisfaction 6 Survey");
});

test("Open an Existing Survey", async ({ page }) => {
  const survey = new Projectpage(page);
  const project = new Homepage(page);
  // Opens an existing project
  await project.openExistingProject("Demo 12");
  // Opens an existing survey
  await survey.openSurvey("Employee Performance");
});
