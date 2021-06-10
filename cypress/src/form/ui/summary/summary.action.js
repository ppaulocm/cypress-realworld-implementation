import * as Component from './summary.comp';

export const saveAndContinue = () => {
  Component.getSaveContinueButton()
    .click({ force: true });
};

export const clickCustomizeTerms = () => {
  Component.getCustomizeTermsButton()
    .click({ force: true });
};

export const back = () => {
  Component.getBackButton()
    .click({ force: true });
};
