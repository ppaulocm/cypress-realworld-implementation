export const getProductionRates = (position) => cy.get('.production-rates-content')
  .find('tbody > tr')
  .eq(position - 1);

export const getProductionName = (position) => cy.get('.production-rates-content')
  .find('tbody > tr')
  .eq(position - 1)
  .find('td')
  .find('[id="productionName"]');

export const getProductionRatesValue = (position) => cy.get('.production-rates-content')
  .find('tbody > tr')
  .eq(position - 1)
  .find('td')
  .find('[data-cy="rate"]');

export const getSecondProductionRates = (position) => cy.get('.production-rates-content')
  .find('tbody > tr')
  .eq(position - 1)
  .find('td')
  .find('[data-cy="secondRate"]');
