import * as HeaderInfo from '../shared/header-info';
import * as ClientInfo from '../shared/client-info';
import * as ServiceAreas from './ui/service-areas';

export const action = {
  goToForm: (username = 'user00') => {
    cy.visit(`${Cypress.env('reactUrl')}#/form-info-form?UserID=${Cypress.env(username).userId}`);
  },

  goToEasterEggForm: (username = 'user00') => {
    cy.visit(`${Cypress.env('reactUrl')}#/form-info-form/pre-filled?UserID=${Cypress.env(username).userId}`);
  },

  setRequiredFields: (masterCity, pid, companyName, serviceAreas) => {
    HeaderInfo.comp.getPidField()
      .focus()
      .type(pid);

    ClientInfo.comp.getCompanyName()
      .focus();

    cy.get('div')
      .contains('Draft Auto-Save Enabled')
      .should('exist');

    cy.get('div')
      .contains('Draft Auto-Save Enabled')
      .should('not.exist');

    ClientInfo.comp.getCompanyName()
      .type(companyName, { force: true });

    HeaderInfo.comp.getMasterCity()
      .select(masterCity);

    ServiceAreas.action.setServiceAreas(serviceAreas, null);
  },
};
