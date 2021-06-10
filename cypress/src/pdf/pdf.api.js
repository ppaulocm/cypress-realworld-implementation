let counter = 1;
const limit = 20;
const poolingTime = 5000;

export const CheckIsGeneratingPDF = (formUniqueId) => {
  cy.wait(poolingTime);
  cy.log(`CheckIsGeneratingPDF: request ${counter} of ${limit} - Interval: ${poolingTime}`);

  cy.request({
    method: 'POST',
    url: `${Cypress.env('api').host}/api/pdf?id=${formUniqueId}`,
    failOnStatusCode: false,
  }).then((resp) => {
    if (resp.status === 200 && resp.body.isGenerating === false) {
      cy.log(`PDF is done: ${!resp.body.isGenerating}`);
      cy.wait(poolingTime);
    } else {
      cy.log(`PDF is done: ${!resp.body.isGenerating}`);
      counter++;
      CheckIsGeneratingPDF(formUniqueId);
    }
  });
};
