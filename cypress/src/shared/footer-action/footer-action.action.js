import * as Component from './footer-action.comp';

export const completeForm = () => {
  Component.getCompleteButton()
    .click({ force: true });
};

export const updateForm = () => {
  cy.get('button')
    .should('not.contain', 'Auto-Save in Progress');

  Component.getUpdateButton()
    .click({ force: true });
};

export const saveDraft = () => {
  Component.getSaveAsButton()
    .click({ force: true });

  Component.getSaveAsType('NEW DRAFT')
    .click({ force: true });
};

export const updateDraft = () => {
  Component.getSaveAsButton()
    .click({ force: true });

  Component.getSaveAsType('UPDATE DRAFT')
    .click({ force: true });
};

export const saveTemplate = () => {
  Component.getSaveAsButton()
    .click({ force: true });

  Component.getSaveAsType('NEW TEMPLATE')
    .click({ force: true });
};
