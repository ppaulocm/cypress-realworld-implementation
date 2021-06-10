export const getSignatureCanvas = () => cy.get('canvas');

export const getSaveButton = () => cy.get('button')
  .contains('SAVE')
  .parent();

export const getCancelButton = () => cy.get('button')
  .contains('CANCEL')
  .parent();

export const getCleanSignatureButton = () => cy.get('button')
  .contains('CLEAR');

export const getRecommendationMessage = () => cy.get('label')
  .contains('For best results we recommended utilizing an Ipad to enter your signature.');
