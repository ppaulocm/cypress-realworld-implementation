import * as Component from './form-pricing.comp';

export const priceQuote1 = (value) => {
  Component.getFormPricingQuote1()
    .should('contain', value);
};

export const quoteTitle = (value) => {
  Component.getFormPriceLabel()
    .should('contain', value);
};

export const checkFormPricingQuote1 = (value) => {
  Component.getFormPricingQuote1()
    .should('contain', value);
};

export const checkFormPricingQuote2 = (value) => {
  Component.getFormPricingQuote2()
    .should('contain', value);
};
