export const getServiceInfoContent = () => cy.get('.account-info-content');

export const getMonthlyServiceButton = () => getServiceInfoContent()
  .find('button')
  .contains('Monthly Service');

export const getSmartCleanButton = () => cy.get('[data-cy="smartClean"]');

export const getCleaningTimesPerMonth = () => cy.get('.validate-frequency')
  .should('contain', 'Cleaning (times per month)')
  .contains('Cleaning (times per month)')
  .find('input');

export const getSecondCleaningTimesPerMonth = () => cy.get('.account-info-cleaning-content')
  .eq(1)
  .find('input');

export const getWeeklyServiceButton = () => getServiceInfoContent()
  .find('button')
  .contains('Weekly Service');

export const getAlarmButton = () => cy.get('[class="radio-button-label"]')
  .contains('Alarm');

export const getKeysButton = () => cy.get('[class="radio-button-label"]')
  .contains('Keys');

export const getBooleanOption = () => cy.get('[class="radio-button-item"]')
  .contains('Yes');

export const getWeekDays = () => cy.get('.validate-frequency')
  .find('button');

export const getFrequencyWeekDays = () => cy.get('label')
  .contains('Quote 2')
  .parent()
  .find('div[class="sc-elJkPf kOlhaQ"]');

export const getTimeWindow = () => cy.get('[id="timeWindow"]');

export const getSecondTimeWindow = () => cy.get('[id="secondTimeWindow"]');

export const getAddFrequencyOption = () => cy.get('[data-cy="addFrequency"]');

export const getAddMonthlyFrequencyOption = () => cy.get('[data-cy="monthlyAddFrequency"]');

export const getSmartCleanIcon = () => cy.get('[id="smartCleanInfoIcon"]');

export const getSmartCleanTooltip = () => cy.get('[id="smartCleanTooltip"]');
