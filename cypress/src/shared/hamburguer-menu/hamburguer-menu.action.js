import * as Component from './hamburguer-menu.comp';

export const accessSandwichMenu = () => {
  Component.getSandwichMenu()
    .click({ force: true });
};

export const openDrafts = () => {
  Component.getDrafts()
    .click({ force: true });
};

export const openTemplates = () => {
  Component.getTemplates()
    .click({ force: true });
};
export const openSentForms = () => {
  Component.getSent()
    .click({ force: true });
};
export const openSignedForms = () => {
  Component.getSignedForms()
    .click({ force: true });
};

export const selectFirstItem = (formStatus) => {
  Component.getFirstItem(formStatus)
    .click({ force: true });
};

export const done = () => {
  Component.getDoneButton()
    .click({ force: true });
};

export const selectYes = () => {
  Component.getSelectYes().click();
};

export const selectNo = () => {
  Component.getSelectNo().click();
};
