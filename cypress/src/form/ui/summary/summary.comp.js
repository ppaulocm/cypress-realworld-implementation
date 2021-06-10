export const getCompanyName = () => cy.get('.hjbovV > strong');

export const getFrequency = () => cy.get('div[label="Frequency"]');

export const getDaysService = () => cy.get('div[label="Days Serviced"]');

export const getTimeWindow = () => cy.get('div[label="Time Window"]');

export const getMonthlyPrice = () => cy.get('div[label="Monthly Price"]');

export const getSpecialtyService = () => cy.get('h2')
  .contains('Specialty Service(s)');

export const getIncludedServices = () => {

};

export const getEntireSummaryQuote = (value) => cy.get('h2')
  .contains('Monthly Service Quote(s)')
  .parent()
  .find('div')
  .contains(value)
  .parent();

export const getDecisionMaker = () => cy.get('h2')
  .contains('Decision Maker');

export const getWalkThru = () => cy.get('h2')
  .contains('Walk-Thru');

export const getSaveContinueButton = () => cy.get('button')
  .find('span')
  .contains('SAVE AND CONTINUE');

export const getCustomizeTermsButton = () => cy.get('span')
  .contains('CUSTOMIZE TERMS')
  .parent()
  .parent();

export const getCustomizeServiceBox = () => cy.get('span')
  .contains('Customize Service Procurement Agreement Terms')
  .parent()
  .find('textarea');

export const getBackButton = () => cy.get('span')
  .contains('BACK');
