const { test, expect } = require('@playwright/test')

export class Homepage{
    constructor(page){
        this.page= page
            }

    async createNewProject(projectname){
        const startdate='10'
        const enddate='15'
        await this.page.getByRole('button', { name: 'Create New Project' }).click();
        await this.page.getByPlaceholder('Enter project name').fill(projectname);       
        await this.page.getByLabel('Choose date').first().click();
        await this.page.getByLabel('Next month').click();
        await this.page.locator(`//button[@role='gridcell'][contains(text(),${startdate})]`).first().click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.locator(`//button[@role='gridcell'][contains(text(),${enddate})]`).first().click();
        await this.page.getByRole('button', { name: 'Create Project' }).click();
        await this.page.waitForTimeout(1000)
        await expect(this.page.locator('#root')).toContainText(projectname);
    }

    async openExistingProject(projectname){
        await this.page.getByText(projectname).click();
        
    }

    async archiveProject(){
        await this.page.locator("//tr[td[contains(.,'Demo 13')]]//td[6]//button[2]").click();
        await this.page.getByPlaceholder('Enter project name').fill('Demo 13');
        await this.page.getByRole('button', { name: 'Archive Project' }).click();
    }
}

    

