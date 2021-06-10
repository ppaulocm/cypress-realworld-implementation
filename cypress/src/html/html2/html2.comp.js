export const getMonthlyQuoteByPosition = (position) => cy.get(`[data-cy="radio-button-${position}"]`);

export const getProtectionServiceOptions = () => cy.get('span')
  .contains('Protection+ Disinfection Service Options')
  .parent()
  .parent();

export const getQuoteAreaByName = (name) => cy.get('div')
  .contains(name)
  .parent();

export const getSelectQuotePosition = (quoteName, position) => getQuoteAreaByName(quoteName)
  .find(`[data-cy="radio-button-${position}"]`);

export const getFrequencyByQuote = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Frequency')
  .parent();

export const getDaysServiceByQuote = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Days Serviced')
  .parent();

export const getTimeWindowByQuote = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Time Window')
  .parent();

export const getCustomizedCleaningServiceByQuote = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Customized Cleaning Service')
  .parent();

export const getDayPorterIncluded = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Day Porter Included')
  .parent();

export const getSuppliedIncluded = () => {
  cy.get('div')
    .contains('Supplies Included')
    .parent();
};

export const getQuotePackage = (index) => cy.get(`[data-cy="radio-button-${index}"]`)
  .parent();

export const getQuoteTotalMonthlyPrice = (index) => getQuotePackage(index);

export const getSpecialtyServiceQuoteSpan = () => cy.get('span')
  .contains('Specialty Service Quote(s)');

export const getTermsAndConditions = () => {

};

export const getProtectionPackageByName = (quoteName, packageName) => getQuoteAreaByName(quoteName)
  .get('label')
  .contains(`PROTECTION+ PACKAGE ${packageName}`)
  .parent();

export const getDeclineOption = (quoteName) => getQuoteAreaByName(quoteName)
  .get('label')
  .contains('I decline PROTECTION+ SERVICES')
  .parent();

export const getDayPorterQuoteOption = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Day Porter Included')
  .parent();

export const getSuppliesQuoteOption = (quoteName) => getQuoteAreaByName(quoteName)
  .find('div')
  .contains('Supplies Included')
  .parent();

export const getProtectionSpecifications = () => cy.get('span')
  .contains('Protection+ Specifications');
