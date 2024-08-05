const { test, expect } = require('@playwright/test');

export class RespondentPage {
    constructor(page) {
        this.page = page;
    }

    async validateRespondentPageFirsttime() {
        await expect(this.page.getByText('Respondents').nth(1)).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Test' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Test' }).click();
        await expect(this.page.getByText('TestLive')).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Upload CSV' }).nth(1)).toBeVisible();
        await expect(this.page.locator('div').filter({ hasText: /^Upload CSV$/ }).getByRole('button')).toBeVisible();
        await expect(this.page.locator('#root')).toContainText('No Respondents Found');
        await expect(this.page.locator('#root')).toContainText('No respondents have been added. Begin by uploading a CSV of respondents.');
        await expect(this.page.locator('div:nth-child(3) > div > div > div').first()).toBeVisible();
    }

    async downloadRespondentTemplateFile() {
        await this.page.getByRole('button', { name: 'Upload CSV' }).nth(1).click();
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'Download Template' }).click();
        const download = await downloadPromise;
    }

    async uploadRespondentData(csv_filepath) {
        await this.page.getByRole('button', { name: 'Upload CSV' }).nth(1).click();
        await expect(this.page.getByRole('dialog')).toContainText("Ensure that your CSV follows the template's column structure to avoid errors. Use the pre-defined template for the correct structure, as other files may not be compatible.");
        await expect(this.page.getByRole('button', { name: 'Download Template' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Cancel' })).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Upload Respondent CSV' }).getByRole('paragraph')).toBeVisible();
        // await this.page.getByRole('dialog').getByText('Browse').click();
        await this.page.getByRole('dialog', { name: 'Upload Respondent CSV' }).locator('#input-file-upload').setInputFiles(csv_filepath);
        await expect(this.page.getByRole('dialog')).toContainText('File uploaded successfully.');
        await expect(this.page.getByRole('button', { name: 'Proceed' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Proceed' }).click();
        await expect(this.page.getByRole('heading', { name: 'Duplicate Validation' }).getByRole('paragraph')).toBeVisible();
        await expect(this.page.getByRole('dialog')).toContainText('Choose Unique Column');
        await expect(this.page.locator('div:nth-child(5) > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root > .MuiBox-root > div > div:nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')).toBeVisible();
        await this.page.getByRole('button', { name: 'Open' }).click();
        await this.page.getByText('Email Address').click();
        await expect(this.page.getByRole('button', { name: 'Validate' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Validate' }).click();
        await expect(this.page.locator('.MuiTypography-root.MuiTypography-body1.css-1o7oer3')).toContainText('The respondent upload process has been initiated. The data will be updated shortly.');
        await this.page.getByRole('button', { name: 'Done' }).click();
        await expect(this.page.locator('#root')).toContainText('Data Processing in Progress');
        await expect(this.page.locator('#root')).toContainText('The respondent data is currently being processed. Please wait for a moment, and the updated information will be displayed once the processing is complete.');
        await expect(this.page.locator('.MuiBox-root > div > div').first()).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Refresh' })).toBeVisible();

    }
    async verifyUploadedRespondentData() {
        await expect(this.page.getByRole('button', { name: 'Download CSV' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Re-Upload CSV' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Add Filter' })).toBeVisible();
        await expect(this.page.getByText('ID')).toBeVisible();
        await expect(this.page.getByText('First Name')).toBeVisible();
        await expect(this.page.getByText('Last Name')).toBeVisible();
        await expect(this.page.getByText('Email Address')).toBeVisible();
        await expect(this.page.getByRole('columnheader', { name: 'Phone Number' })).toBeVisible();
        await expect(this.page.getByRole('columnheader', { name: 'Survey', exact: true })).toBeVisible();
        await expect(this.page.getByRole('columnheader', { name: 'Survey Status' })).toBeVisible();
        await expect(this.page.locator('td:nth-child(9) > div').first()).toBeVisible();
        await expect(this.page.locator("(//button[@name='deleteButton'])[1]")).toBeVisible();
        await expect(this.page.locator("(//button[@name='editButton'])[1]")).toBeVisible();
        await expect(this.page.getByText('Remove All FiltersApply')).toBeVisible();

    }

    async reuploadRespondentData(csv_filepath) {
        await this.page.getByRole('button', { name: 'Re-Upload CSV' }).click();
        await expect(this.page.getByRole('heading')).toContainText('Upload Respondent CSV');
        await expect(this.page.getByLabel('Upload Respondent CSV')).toContainText('Ensure that your CSV follows the template\'s column structure to avoid errors. Use the pre-defined template for the correct structure, as other files may not be compatible.');
        await expect(this.page.getByLabel('Upload Respondent CSV')).toContainText('*Please note: For column headers with spaces/special characters, enclose the phrases in double quotes, e.g., “Experience (Years)”.');
        await expect(this.page.getByRole('button', { name: 'Download Template' })).toBeVisible();
        await this.page.getByRole('dialog', { name: 'Upload Respondent CSV' }).locator('#input-file-upload').setInputFiles(csv_filepath);
        await this.page.getByText('File uploaded successfully.').click();
        await this.page.getByRole('button', { name: 'Proceed' }).click();
        await expect(this.page.getByRole('heading')).toContainText('Duplicate Validation');
        await expect(this.page.getByLabel('Duplicate Validation')).toContainText('Duplicate records have been detected in the chosen unique column. Kindly review and rectify them for data accuracy, or proceed without changes, bearing in mind that this may impact the results.');
        await this.page.getByRole('button', { name: 'Ignore and proceed' }).click();
        await expect(this.page.getByLabel('Duplicate Validation')).toContainText('The respondent upload process has been initiated. The data will be updated shortly.');
        await this.page.getByRole('button', { name: 'Done' }).click();
        await expect(this.page.getByRole('button', { name: 'Refresh' })).toBeVisible();
        await expect(this.page.getByText('Data Processing in Progress')).toBeVisible();

    }

    async downloadRespondentdata() {
        await this.page.getByRole('button', { name: 'Download CSV' }).click();
        await expect(this.page.getByRole('heading')).toContainText('Download CSV');
        await expect(this.page.getByLabel('Download CSV')).toContainText('Are you sure you want to download the respondents CSV?');
        await expect(this.page.getByRole('button', { name: 'Cancel' })).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Download CSV' })).toBeVisible();
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'Download CSV' }).click();
        const download = await downloadPromise;
        await expect(this.page.getByText('The respondents CSV has been')).toBeVisible();
        await this.page.getByRole('button', { name: 'Done' }).click();

    }

}
