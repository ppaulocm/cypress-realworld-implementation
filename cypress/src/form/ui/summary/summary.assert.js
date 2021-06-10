import * as Component from './summary.comp';

export const pageTitle = () => {
  cy.log('Confirm that you are in Summary page');
  cy.get('span')
    .contains('Loading')
    .should('not.exist');

  cy.get('h2')
    .should('be.visible')
    .should('contain', 'Summary');
};

export const frequency = (value) => {
  Component.getFrequency()
    .should('contain', value);
};

export const dayServices = (value) => {
  Component.getDaysService()
    .should('contain', value);
};

export const timeWindow = (value) => {
  Component.getTimeWindow()
    .should('contain', value);
};

export const monthlyPrice = (value) => {
  Component.getMonthlyPrice()
    .should('contain', value);
};

export const smartCleanPricePrice = (value) => cy.get('span')
  .contains('SmartClean')
  .parent()
  .parent()
  .parent()
  .should('contain', value);

export const smartCleanPriceLabel = () => cy.get('span')
  .should('contain', 'SmartClean')
  .should('contain', '℠')
  .should('contain', 'Price');

export const customizeServiceTermByItem = (value) => Component.getCustomizeServiceBox()
  .eq(value);

export const specialtyServiceSummary = (value) => {
  cy.get('h2').contains('Specialty Service(s)').parent().should('contain', value);
};
