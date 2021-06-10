import * as FormPage from '../../src/form/form.page';
import * as HeaderInfo from '../../src/shared/header-info';
import * as ServiceInfo from '../../src/form/ui/service-info';
import * as RoomInventory from '../../src/shared/room-inventory';
import * as ProductionRates from '../../src/form/ui/production-rates';
import * as FormPricing from '../../src/form/ui/form-pricing';
import * as FooterActions from '../../src/shared/footer-action';
import * as Summary from '../../src/form/ui/summary';
import * as SummarySucess from '../../src/form/ui/summary-success';

describe('Form basic tests', () => {
  beforeEach(() => {
    FormPage.action.goToForm();
  });

  it('Simple use of page objects - access form, fill requried fields and save.', () => {
    HeaderInfo.assert.formPageTitle();

    FormPage.action.setRequiredFields(Cypress.env('defaultCity'), '0001', 'Jc Comp', ['Office']);

    ServiceInfo.action.setWeeklyServiceInfo(['Mon', 'Thu'], '6pm', false, true, true);

    RoomInventory.action.setRoomInventoryItem(1, 'CO', 'CPT', 50, 10, null, null, null);

    ProductionRates.action.setProductionRates(1, 'GrA', 1);

    FormPricing.action.setFormPricing('15');

    FooterActions.action.completeForm();

    Summary.assert.pageTitle();
    Summary.assert.dayServices('Mon, Thu');
    Summary.assert.timeWindow('6pm');

    Summary.action.saveAndContinue();

    SummarySucess.assert.successMessage();
  });
});
