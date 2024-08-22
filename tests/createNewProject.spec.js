const { test, expect } = require("@playwright/test");
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/Homepage";
import { Projectpage } from "../pages/Projectpage";

test.beforeEach("Login", async ({ page }) => {
  const login = new Loginpage(page);
  await login.navigateToLoginPage();
  await login.login();
});

test("Create A New Project", async ({ page }) => {
  const project = new Homepage(page);
  const survey = new Projectpage(page);
  // Creates a new project
  await project.createNewProject("Demo Project 53");
  // Creates a new survey in the new project
  await survey.createNewSurvey("HR Survey");
});

// test("Archive A Project", async ({ page }) => {
//   const project = new Homepage(page);
//   // Archives a project
//   await project.archiveProject();
// });
