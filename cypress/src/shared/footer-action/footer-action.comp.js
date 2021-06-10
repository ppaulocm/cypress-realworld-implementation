export const getCompleteButton = () => cy.get('.footer-content')
  .find('button')
  .contains('COMPLETE')
  .should('not.be.disabled');

export const getUpdateButton = () => cy.get('.footer-content')
  .find('button')
  .contains('UPDATE')
  .should('not.be.disabled');

export const getSaveAsButton = () => cy.get('.footer-content')
  .find('button')
  .contains('SAVE AS');

export const getSaveAsType = (type) => cy.get('div')
  .contains(type);
