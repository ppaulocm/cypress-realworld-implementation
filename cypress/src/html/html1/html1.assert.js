import * as Component from './html1.comp';

export const checkFirstFrequencyInput = (value) => {
  cy.get('[data-cy="frequency-input-0"]')
    .should('have.value', value)
    .should('be.visible');
};

export const checkSecondFrequencyInput = (value) => {
  cy.get('[data-cy="frequency-input-undefined"]')
    .should('have.value', value)
    .should('be.visible');
};

// days of Frequency
export const checkFirstDaysFrequencyInput = (value) => {
  cy.get('[data-cy="frequency-days-serviced-input-0"]')
    .should('have.value', value)
    .should('be.visible');
};

export const checkSecondDaysFrequencyInput = (value) => {
  cy.get('[data-cy="frequency-days-serviced-input-undefined"]')
    .should('have.value', value);
};

// time window
export const checkFirstTimeWindowInput = (value) => {
  cy.get('[data-cy="frequency-time-window-input-0"]')
    .should('contain', value);
};

export const checkSecondTimeWindowInput = (value) => {
  cy.get('[data-cy="frequency-time-window-input-undefined"]')
    .should('contain', value);
};

// price
export const checkFirstFrequencyPrice = (price) => {
  cy.get('[data-cy="frequency-monthly-price-input-0"]')
    .should('have.value', price)
    .should('be.visible');
};

export const checkSecondFrequencyPrice = (price) => {
  cy.get('[data-cy="frequency-monthly-price-input-undefined"]')
    .should('have.value', price);
};

// assert decline option
export const checkDeclineOption = () => {
  cy.get('input')
    .invoke('value')
    .contains('I decline a Monthly Service option.')
    .should('be.visible')
    .should('exist');
};

export const openCleanSpecByName = (value) => {
  Component.getCleaningSpecificationByName(value)
    .click();
};

// assert cleaning spec areas
export const cleanSpecContent = (value, areaValue, specValue) => {
  Component.getCleaningSpecificationContentByName(value)
    .should('contain', areaValue)
    .should('contain', specValue);
};

export const checkSpanNoExists = (item) => {
  cy.get('span')
    .should('not.contain', item);
};

export const checkServiceAreas = (area) => {
  Component.getServiceAreas()
    .should('contain', area);
};

export const checkItemExistence = (item) => {
  cy.get('span')
    .should('contain', item);
};
