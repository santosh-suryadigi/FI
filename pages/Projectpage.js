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
    
    async verifyTabVisibility(){
        await expect(this.page.getByRole('tab', { name: 'Respondents' })).toBeVisible();
        await expect(this.page.getByRole('tab', { name: 'Dashboard' })).toBeVisible();
        await expect(this.page.getByRole('tab', { name: 'Reports' })).toBeVisible();
        await expect(this.page.getByRole('tab', { name: 'User Access' })).toBeVisible();
    }

    async openSurvey(surveyname){
        await this.page.locator(`(//div[@class='MuiStack-root css-1nuh8la'])[contains(.,'${surveyname}')]//button[2]`).click()
        await this.page.waitForTimeout(1000)
    }

    async navigateToRespondentTab(){
        await this.page.getByRole('tab', { name: 'Respondents' }).click();
        await this.page.waitForTimeout(1000)


    }

}