const { test, expect } = require('@playwright/test');

export class Surveypage {
    constructor(page) {
        this.page = page
        this.createQuestionnaireButton = 'button[name="createQuestionnaire"]'
        this.editQuestionnaire = '//button[contains(.,"Edit Questionnaire")]'

    }

    async createSingleSelectQuestion() {

        if (await this.page.isVisible(this.createQuestionnaireButton)) {
            await this.page.locator(this.createQuestionnaireButton).click();

        } else {
            await this.page.click(this.editQuestionnaire)
        }
        await this.page.getByRole('button', { name: 'Add New Question' }).click();
        await this.page.getByRole('button', { name: 'Single Select' }).click();
        await this.page.getByPlaceholder('Enter question', { exact: true }).fill('Tell more about the company');
        await this.page.getByRole('textbox').nth(2).fill('Question Description');
        await this.page.getByRole('button', { name: 'Choose Preset' }).click();
        await this.page.click("//div[@id='Scale']")
        await this.page.getByRole('option', { name: '5' }).click();
        await this.page.click("//div[@id='Preset Type']");
        await this.page.getByRole('option', { name: 'Willingness' }).click();
        await this.page.getByRole('button', { name: 'Choose Preset' }).click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('button', { name: 'Done' }).click();

    }
    async createMultiSelectQuestion() {
        if (await this.page.isVisible(this.createQuestionnaireButton)) {
            await this.page.locator(this.createQuestionnaireButton).click();
        } else {
            await this.page.click(this.editQuestionnaire);
        }

        await this.page.getByRole('button', { name: 'Add New Question' }).click();
        await this.page.getByRole('button', { name: 'Multi Select' }).click();
        await this.page.getByPlaceholder('Enter question', { exact: true }).click();
        await this.page.getByPlaceholder('Enter question', { exact: true }).fill('What is the preferred mode of transportation?');
        await this.page.locator('.remirror-is-empty').click();
        await this.page.locator('.ProseMirror').fill('Please answer the above question.');
        await this.page.locator('button[name="addButton"]').click();
        await this.page.locator('button[name="addButton"]').first().click();
        await this.page.locator('button[name="addButton"]').first().click();
        await this.page.getByPlaceholder('Enter option').first().fill('Car');
        await this.page.getByPlaceholder('Enter option').first().press('Tab');
        await this.page.getByPlaceholder('Enter code').first().fill('1');
        await this.page.getByPlaceholder('Enter option').nth(1).fill('Bike');
        await this.page.getByPlaceholder('Enter option').nth(1).press('Tab');
        await this.page.getByPlaceholder('Enter code').nth(1).fill('2');
        await this.page.getByPlaceholder('Enter option').nth(2).fill('Bus');
        await this.page.getByPlaceholder('Enter option').nth(2).press('Tab');
        await this.page.getByPlaceholder('Enter code').nth(2).fill('3');
        await this.page.getByPlaceholder('Enter option').nth(3).fill('Metro');
        await this.page.getByPlaceholder('Enter option').nth(3).press('Tab');
        await this.page.getByPlaceholder('Enter code').nth(3).fill('4');
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('button', { name: 'Done' }).click();
    }

    async createOpenEndedQuestion() {
        if (await this.page.isVisible(this.createQuestionnaireButton)) {
            await this.page.locator(this.createQuestionnaireButton).click();
        } else {
            await this.page.click(this.editQuestionnaire);
        }

        await this.page.getByRole('button', { name: 'Add New Question' }).click();
        await this.page.getByRole('button', { name: 'Open Ended' }).click();
        await this.page.getByPlaceholder('Enter question', { exact: true }).click();
        await this.page.getByPlaceholder('Enter question', { exact: true }).fill('Please enter your answers in the below fields');
        await this.page.locator('button[name="addButton"]').click();
        await this.page.locator('button[name="addButton"]').first().click();
        await this.page.getByPlaceholder('Enter title for the field').first().fill('Field Entry 1');
        await this.page.getByPlaceholder('Enter title for the field').first().press('Tab');
        await this.page.getByPlaceholder('Enter code').first().fill('1');
        await this.page.getByPlaceholder('Enter title for the field').nth(1).fill('Field Entry 2');
        await this.page.getByPlaceholder('Enter title for the field').nth(1).press('Tab');
        await this.page.getByPlaceholder('Enter code').nth(1).fill('2');
        await this.page.getByPlaceholder('Enter title for the field').nth(2).fill('Field Entry 3');
        await this.page.getByPlaceholder('Enter title for the field').nth(2).press('Tab');
        await this.page.getByPlaceholder('Enter code').nth(2).fill('3');
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.getByRole('button', { name: 'Done' }).click();
    }

    async uploadRules(csv_filepath) {
        await this.page.getByRole('button', { name: 'Upload Rules' }).click();
        await expect(this.page.getByRole('heading')).toContainText('Upload Rules');
        await expect(this.page.getByLabel('Upload Rules')).toContainText('Ensure that your CSV follows the template\'s column structure to avoid errors. Use the pre-defined template for the correct structure, as other files may not be compatible.');
        await expect(this.page.getByLabel('Upload Rules')).toContainText('*Please note: For column headers with spaces/special characters, enclose the phrases in double quotes, e.g., “Experience (Years)”.');
        await expect(this.page.getByRole('button', { name: 'Download Template' })).toBeVisible();
        await this.page.locator('#input-file-upload').setInputFiles(csv_filepath);
        await expect(this.page.getByLabel('Upload Rules')).toContainText('File uploaded successfully.');
        await expect(this.page.getByRole('button', { name: 'Validate Rules' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Validate Rules' }).click();
        await expect(this.page.getByLabel('File Validation')).toContainText('The file validation has been successfully completed.');
        await this.page.getByRole('button', { name: 'Done' }).click();
    }

}
