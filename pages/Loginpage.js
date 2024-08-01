const fs = require('fs');
const path = require('path');
const configPath = path.resolve(__dirname, '../config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export class Loginpage {

    constructor(page) {
        this.page = page;
        this.url = config.devurl;
        this.username = config.username;
        this.password = config.password;
        this.usernameInput = 'id=username';
        this.passwordInput = 'id=password';
        this.loginButton = '#kc-login';
    }

    async navigateToLoginPage() {
        await this.page.goto(this.url);
        await this.page.waitForSelector(this.usernameInput);
    }

    async Login() {
        await this.page.fill(this.usernameInput, this.username);
        await this.page.fill(this.passwordInput, this.password);
        await this.page.click(this.loginButton);
        await this.page.waitForNavigation();
    }
};
