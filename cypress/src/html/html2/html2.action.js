import * as Component from './html2.comp';

export const setMonthlyQuoteByPosition = (position) => {
  if (position === 2) {
    Component.getMonthlyQuoteByPosition(position)
      .click();
  } else if (position === 0) {
    Component.getMonthlyQuoteByPosition(position)
      .eq(position)
      .click({ force: true });
  }
};

export const selectProtectionPlan = (packageName, option) => {
  Component.getSelectQuotePosition(packageName, option)
    .click();
};

export const openBlueProtectionSpecifications = () => {
  Component.getProtectionSpecifications()
    .parent()
    .parent()
    .find('span')
    .contains('BLUE')
    .click({ force: true });
};

export const openOrangeProtectionSpecifications = () => {
  Component.getProtectionSpecifications()
    .parent()
    .parent()
    .find('span')
    .contains('ORANGE')
    .click({ force: true });
};

export const openPlatinumProtectionSpecifications = () => {
  Component.getProtectionSpecifications()
    .parent()
    .parent()
    .find('span')
    .contains('PLATINUM')
    .click({ force: true });
};
