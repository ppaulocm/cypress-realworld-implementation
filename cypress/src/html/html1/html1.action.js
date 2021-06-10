import * as Component from './html1.comp';

export const openCleanSpecByName = (value) => {
  Component.getCleaningSpecificationByName(value)
    .click();
};

export const setMonthlyQuoteByPosition = (position) => {
  if (position === 2) {
    Component.getMonthlyQuoteByPosition(position).click();
  } else if (position === 0) {
    Component.getMonthlyQuoteByPosition(position)
      .eq(position)
      .click({ force: true });
  }
};
