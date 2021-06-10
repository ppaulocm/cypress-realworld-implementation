import * as Component from './production-rates.comp';

export const productionRates = (line, value) => {
  Component.getProductionRates(line)
    .should('contain', value);
};

export const productionRateName = (line, value) => {
  Component.getProductionName(line)
    .should('have.value', value);
};
