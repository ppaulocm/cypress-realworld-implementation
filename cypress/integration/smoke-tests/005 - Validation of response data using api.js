import * as form from '../../src/form/api/form-required-fields.model.json';
import * as FormApi from '../../src/form/api/form.api';
import * as PDFApi from '../../src/pdf/pdf.api';

describe('API Validations', () => {
  beforeEach('Create Form', () => {
    FormApi.createForm(form).then((res) => {
      Cypress.env('formUniqueId', res.body.id);
    });
  });

  it('Validation of response data using api', () => {
    const formUniqueId = Cypress.env('formUniqueId');
    const blankPdfUrl = `${Cypress.env('api').host}/api/document/${formUniqueId}`;

    PDFApi.CheckIsGeneratingPDF(formUniqueId);

    cy.request(blankPdfUrl).then((resp) => {
      cy.request(resp.body).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(parseInt(resp.headers['content-length'])).to.gt(1000000);
        expect(resp.headers['content-type']).to.eq('application/pdf');
      });
    });
  });
});
