export const getSandwichMenu = () => cy.get('.hamb-menu-icon');

// get are replicated because is planning to each of items of sandwich menu, have a specific data-cy id
export const getDrafts = () => cy.get('p')
  .contains('DRAFTS')
  .parent()
  .find('i');

export const getTemplates = () => cy.get('p')
  .contains('TEMPLATES')
  .parent()
  .find('i');

export const getSent = () => cy.get('p')
  .contains('SENT')
  .parent()
  .find('i');

export const getSignedForms = () => cy.get('p')
  .contains('SIGNED')
  .parent()
  .find('i');

export const getFirstItem = (formStatus) => cy.get('p')
  .contains(formStatus)
  .parent()
  .parent()
  .parent()
  .find('table')
  .find('tr')
  .eq(0);

export const getSelectYes = () => cy.get('[data-cy="confirm-button"]');

export const getSelectNo = () => cy.get('button')
  .contains('NO');

export const getDoneButton = () => cy.get('button')
  .contains('DONE');
