import { Loginpage } from "../pages/Loginpage";
import { Projectpage } from "../pages/Projectpage";
import { Homepage } from "../pages/Homepage";

export class Utils {
  async loginAndNavigateToRespondentTab(ProjectName, page) {
    const login = new Loginpage(page);
    // Navigates to the login page
    await login.navigateToLoginPage();
    await login.login();
    const home = new Homepage(page);
    const project = new Projectpage(page);
    // Opens an existing project
    await home.openExistingProject(ProjectName);
    await project.navigateToRespondentTab();
  }

  async loginAndNavigateToRespondentTabInArchiveProject(ProjectName, page) {
    const login = new Loginpage(page);
    // Navigates to the login page
    await login.navigateToLoginPage();
    await login.login();
    const home = new Homepage(page);
    const project = new Projectpage(page);
    await home.openArchiveProjects();
    // Opens an existing project
    await home.openExistingProject(ProjectName);
    await project.navigateToRespondentTab();
  }

  async formatTextForSelector(inputText) {
    // Replace regular spaces with non-breaking spaces (\u00A0)
    const formattedText = inputText.replace(/ /g, "\u00A0");
    return formattedText;
  }
}
