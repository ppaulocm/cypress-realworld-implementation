// form PRICING QUOTE 1
export const getFormPricingQuote1 = () => cy.get('.form-content-item')
  .eq(0);

export const getFormPriceHourQuote1 = () => cy.get('[id="formPriceHour"]');

export const getFormOverrideQuote1 = () => cy.get('[data-cy="formOverrideBasePrice"]');

// form PRICING QUOTE 2
export const getFormPricingQuote2 = () => cy.get('.form-content-item')
  .eq(0);

export const getFormPriceHourQuote2 = () => cy.get('[id="formPriceHourSecondFrequency"]');

export const getFormOverrideQuote2 = () => cy.get('[id="secondFormOverrideBasePrice"]')
  .parent();

export const getFormPriceLabel = () => cy.get('.form-pricing-label');

export const getFormOverrideInput = () => cy.get('[data-cy="formOverrideBasePrice"]');
