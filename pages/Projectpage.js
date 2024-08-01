const { test, expect } = require('@playwright/test')
export class Projectpage {

    constructor(page) {
        this.page = page
        this.createNewSurveybutton = 'button[name="Create New Survey"]'
    }

    async createNewSurvey(surveyname) {
        await this.page.locator(this.createNewSurveybutton).click();
        await this.page.getByPlaceholder('Enter survey name').fill(surveyname);
        await this.page.getByRole('button', { name: 'Create Survey' }).click();
        await expect(this.page.locator('#root')).toContainText(surveyname)
        await this.page.waitForTimeout(1000)

    }

}