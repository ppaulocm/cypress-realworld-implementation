import * as Component from './html.comp';

export const goTo = (id) => {
  cy.visit(`${Cypress.env('reactUrl')}/#/proposal?formUniqueId=${id}&franchiseId=${Cypress.env('franchiseId')}`);
};

export const nextPage = () => {
  Component.getNextButton()
    .click({ force: true });
};

export const confirmButton = () => {
  Component.getConfirmButton()
    .click();
};
