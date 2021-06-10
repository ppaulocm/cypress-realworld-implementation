export const getProposalHeader = () => cy.get('[data-cy="proposal-header"]');

export const getCompanyName = () => cy.get('[data-cy="proposal-header-company"]');

export const getCompanyAddress = () => cy.get('[data-cy="proposal-header-address""]');

export const getProposalPreparedFor = () => cy.get('[data-cy="proposal-header-prepared-for"]');

export const getProposalPreparedBy = () => cy.get('[data-cy="proposal-header-prepared-by"]');

export const getAreaSpecifiationCompanyData = () => cy.get('[data-cy="area-specification-company-data"]');

export const getServiceAreas = () => cy.get('[data-cy="area-specification-list-item-1"]')
  .parent();

export const getCleaningSpecificationByName = (frequency) => cy.get('span')
  .contains('Cleaning Specifications')
  .parent()
  .parent()
  .find('span')
  .contains(frequency)
  .parent();

export const getCleaningSpecificationContentByName = (frequency) => cy.get('span')
  .contains('Cleaning Specifications')
  .parent()
  .parent()
  .find('span')
  .contains(frequency)
  .parent()
  .parent();

export const getMonthlyServiceQuoteSection = () => {
  cy.get('span')
    .contains('MONTHLY SERVICE QUOTE(S)')
    .parent()
    .parent();
};

export const getMonthlyQuoteByPosition = (position) => cy.get(`[data-cy="radio-button-${position}"]`);
