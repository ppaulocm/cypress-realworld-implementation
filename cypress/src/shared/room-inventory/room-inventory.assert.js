import * as Component from './room-inventory.comp';

export const squareFeetByLine = (line, value) => {
  Component.getTotalSquareFeet(line).should('have.value', value);
};
