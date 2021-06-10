import * as Component from './production-rates.comp';

export const setProductionRates = (position, name, cleaningFreq, secondCleaningFreq) => {
  Component.getProductionName(position)
    .click({ force: true })
    .type(name);

  Component.getProductionRatesValue(position)
    .click({ force: true })
    .type(cleaningFreq);

  if (secondCleaningFreq) {
    Component.getSecondProductionRates(position)
      .click({ force: true })
      .type(secondCleaningFreq);
  }
};
