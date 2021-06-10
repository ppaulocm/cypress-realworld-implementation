import * as Component from './html2.comp';

export const checkDisinfectionServiceOptionsNoExists = () => {
  cy.get('span')
    .should('not.contain', 'Protection+ Disinfection Service Options');
};

export const checkDisinfectionServiceOptions = (value) => {
  Component.getProtectionServiceOptions()
    .should('contain', value);
};

export const checkQuoteFrequency = (quoteName, value) => {
  Component.getFrequencyByQuote(quoteName)
    .should('contain', value);
};

export const checkQuoteFrequencyNoExist = (quoteName, value) => {
  Component.getFrequencyByQuote(quoteName)
    .should('not.contain', value);
};

export const checkQuoteDaysServiced = (quoteName, value) => {
  Component.getDaysServiceByQuote(quoteName)
    .should('contain', value);
};

export const checkQuoteTimeWindow = (quoteName, value) => {
  Component.getTimeWindowByQuote(quoteName)
    .should('contain', value);
};

export const checkCustomizedCleanService = (quoteName, value) => {
  Component.getCustomizedCleaningServiceByQuote(quoteName)
    .should('contain', value);
};

export const checkProtectionPackageDetails = (quoteName, packageName, value) => {
  Component.getProtectionPackageByName(quoteName, packageName)
    .parent()
    .parent()
    .parent()
    .should('contain', value);
};

export const checkQuoteTotalMonthlyPrice = (index, value) => {
  Component.getQuoteTotalMonthlyPrice(index)
    .should('contain', value);
};

export const checkDeclineOptionExist = (quoteName, value) => {
  Component.getDeclineOption(quoteName)
    .parent()
    .parent()
    .parent()
    .should('contain', value);
};

export const checkDayPorterQuoteOption = (quoteName, value) => {
  Component.getDayPorterQuoteOption(quoteName)
    .parent()
    .parent()
    .parent()
    .should('contain', value);
};

export const checkSuppliesQuoteOption = (quoteName, value) => {
  Component.getDayPorterQuoteOption(quoteName)
    .parent()
    .parent()
    .parent()
    .should('contain', value);
};

export const checkBlueProtectionSpecifications = () => {
  Component.getProtectionSpecifications()
    .parent()
    .parent()
    .should('contain', 'Disinfect all restroom fixtures, including flush valve handles, paper and soap dispensers, and light switches.')
    .should('contain', 'Disinfect restroom stall doors, handles, and handrails.')
    .should('contain', 'Disinfect kitchen counters, sinks, and faucet handles.')
    .should('contain', 'Disinfect refrigerator/freezer doors and handles, including water and ice dispensers.')
    .should('contain', 'Disinfect microwave/toaster oven control panel and doors.')
    .should('contain', 'Disinfect vending equipment control panels and doors.')
    .should('contain', 'Disinfect coffee pot handles and dispensing units.')
    .should('contain', 'Disinfect chairs in the lobby/waiting area.')
    .should('contain', 'Disinfect elevator wall panel/button, control panel/button, and railings.')
    .should('contain', 'Disinfect doorknobs, handles, and doorframes.')
    .should('contain', 'Disinfect push/pull surfaces.')
    .should('contain', 'Disinfect light switches and thermostats.')
    .should('contain', 'Disinfect telephones, copiers, faxes, printers, and other office equipment.')
    .should('contain', 'Disinfect all table surfaces and edges in conference rooms.')
    .should('contain', 'Disinfect impervious chair surfaces, armrests, and mist all chair fabric surfaces in conference rooms.')
    .should('contain', 'Disinfect all public counters.')
    .should('contain', 'Disinfect drinking fountains and water coolers.')
    .should('contain', 'Disinfect stair railings.');
};

export const checkOrangeProtectionSpecifications = () => {
  Component.getProtectionSpecifications()
    .parent()
    .parent()
    .should('contain', 'Disinfect all chairs.')
    .should('contain', 'Disinfect all cleared surfaces of desks and cabinets.')
    .should('contain', 'Disinfect cabinet and drawer doors and handles.')
    .should('contain', 'Disinfect workstations.')
    .should('contain', 'Disinfect telephones.')
    .should('contain', 'Disinfect computer mouse and keyboards.')
    .should('contain', 'Disinfect cubicles.')
    .should('contain', 'Disinfect doors.')
    .should('contain', 'Disinfect A/V controls, switches, and other surfaces with potential for hand contact.');
};

export const checkPlatinumProtectionSpecifications = () => {
  Component.getProtectionSpecifications()
    .parent()
    .parent()
    .should('contain', 'Electrostatic spray of all surfaces with EPA grade disinfectant including all surfaces and hard to reach areas.');
};
