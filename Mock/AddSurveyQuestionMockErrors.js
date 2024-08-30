export async function addSurveyQuestionErrorMock(page) {
    await page.route("*/**/survey/AddSurveyQuestion", async (route) => {
      const json = {
        "meta":{"status":"OK"},"error":{"code":"SURVEY_IS_CLOSED"}
 
      };
      await route.fulfill({ json });
    });
    await page.getByRole("button", { name: "Save" }).click();
    await page.getByRole("button", { name: "Close" }).click();
    await page.route("*/**/survey/AddSurveyQuestion", async (route) => {
      const json = {
        "meta":{"status":"OK"},"error":{"code":"INVALID_SURVEY_ID"}
 
      };
      await route.fulfill({ json });
    });
    await page.getByRole("button", { name: "Save" }).click();
}
