import * as form from '../../src/form/api/24476.json';
import * as FormApi from '../../src/form/api/form.api';
import * as HTML from '../../src/html/html';
import * as HTML1 from '../../src/html/html1';
import * as HTML2 from '../../src/html/html2';

describe('UI Validations', () => {
  beforeEach('Create Form', () => {
    FormApi.createForm(form).then((res) => {
      Cypress.env('formUniqueId', res.body.id);
    });
  });

  it('Use API request on cypress test - generate system object using api and check UI behavior', () => {
    const formUniqueId = Cypress.env('formUniqueId');
    const packageFrequency1 = '1x Monthly';
    const finalPrice1 = '8,550.00';

    HTML.action.goTo(formUniqueId);
    HTML1.assert.checkSpanNoExists('Monthly Service Quote(s)');
    HTML.action.nextPage();

    HTML2.assert.checkDisinfectionServiceOptions('Package A');
    HTML2.assert.checkDisinfectionServiceOptions('Weekly');
    HTML2.assert.checkQuoteFrequency(packageFrequency1, '1x Monthly');
    HTML2.assert.checkQuoteFrequency(packageFrequency1, '& Protection+ Disinfect');
    HTML2.assert.checkQuoteDaysServiced(packageFrequency1, 'MONTHLY');
    HTML2.assert.checkQuoteTimeWindow(packageFrequency1, '6-7 PM');
    HTML2.assert.checkCustomizedCleanService(packageFrequency1, 'Included');
    HTML2.assert.checkProtectionPackageDetails(packageFrequency1, 'A', 'PLATINUM');
    HTML2.assert.checkProtectionPackageDetails(packageFrequency1, 'A', 'Weekly');
    HTML2.assert.checkProtectionPackageDetails(packageFrequency1, 'A', 'Included');
    HTML2.assert.checkQuoteTotalMonthlyPrice(0, finalPrice1);
  });
});
