import * as FormPage from '../../src/form/form.page';
import * as SandwichMenu from '../../src/shared/hamburguer-menu';
import * as HeaderInfo from '../../src/shared/header-info';
import * as ClientInfo from '../../src/shared/client-info';
import * as Utils from '../../utils/utils';

describe('API requests', () => {
  beforeEach(() => {
    FormPage.action.goToForm();
  });

  it('Use of intercept - access form and wait for a specific request to continue the test', () => {
    const rndInt = Utils.getRndId();
    const pid = `C00002_${rndInt}`;

    HeaderInfo.assert.formPageTitle();

    ClientInfo.comp.getCompanyName().type(rndInt, { force: true });

    cy.intercept(`${Cypress.env('api').host}/api/FormSheet`).as('autosave');
    HeaderInfo.comp.getPidField().type(pid);
    cy.wait('@autosave', { timeout: 30000 });

    SandwichMenu.action.accessSandwichMenu();
    SandwichMenu.action.openDrafts();
    SandwichMenu.action.selectFirstItem('DRAFTS');

    HeaderInfo.assert.formPageTitle();
  });
});
