const fs = require("fs");
const path = require("path");
const configPath = path.resolve(__dirname, "../config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
const { expect } = require("@playwright/test");

export class Loginpage {
  constructor(page) {
    this.page = page;
    this.url = config.devurl;
    this.homeurl = config.homeurl;
    this.username = config.username;
    this.password = config.password;
    this.usernameInput = "id=username";
    this.passwordInput = "id=password";
    this.loginButton = "#kc-login";
  }

  async navigateToLoginPage() {
    await this.page.goto(this.url);
    await this.page.waitForSelector(this.usernameInput);
  }

  async login() {
    await this.page.fill(this.usernameInput, this.username);
    await this.page.fill(this.passwordInput, this.password);
    await this.page.click(this.loginButton);
    await this.page.waitForNavigation();
  }
  async navigateToHomePage() {
    await this.page.goto(this.homeurl);
    await this.page.waitForSelector("//p[contains(text(),'Active Projects')]");
  }
  async validateLoginPageUI() {
    await expect(this.page.getByText("Email")).toBeVisible();
    await expect(this.page.getByLabel("Email")).toBeVisible();
    await expect(
      this.page.getByText("Password", { exact: true })
    ).toBeVisible();
    await expect(this.page.getByLabel("Password")).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Sign In" })
    ).toBeVisible();
    await expect(
      this.page.getByRole("button", { name: "Sign In" })
    ).toBeEnabled();
    await expect(
      this.page.getByRole("link", { name: "Forgot Password?" })
    ).toBeVisible();
    await expect(this.page.getByRole("link")).toContainText("Forgot Password?");
    await expect(this.page.locator("#kc-login")).toContainText("Sign In");
    await expect(this.page.getByRole("banner")).toBeVisible();
  }
}
