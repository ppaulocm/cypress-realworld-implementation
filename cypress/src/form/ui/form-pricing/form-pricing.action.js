import * as Component from './form-pricing.comp';

export const setFormPricing = (pricePerHour, overridePrice) => {
  Component.getFormPriceHourQuote1()
    .click({ force: true })
    .type(pricePerHour)
    .type('{enter}');

  if (overridePrice) {
    Component.getFormOverrideQuote1()
      .type(overridePrice, { force: true })
      .type('{enter}', { force: true });
  }
};

export const setSecondFormPriceHour = (pricePerHour, overridePrice) => {
  if (overridePrice) {
    Component.getFormOverrideQuote2()
      .type(overridePrice)
      .type('{enter}');
  }

  Component.getFormPriceHourQuote2()
    .click({ force: true })
    .type(pricePerHour)
    .type('{enter}');
};
