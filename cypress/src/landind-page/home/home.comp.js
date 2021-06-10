export const getAddSignatureButton = () => cy.get('button')
  .contains('Add');

export const getUpdateSignatureButton = () => cy.get('span')
  .contains('Update');

export const getLogout = () => cy.get('button')
  .contains('LOGOUT');

export const getNoticeWarnMessage = () => cy.get('label')
  .contains('Notice: Opening multiple forms simultaneously or leaving forms open for extended periods may cause unexpected behavior.');

export const getAddSignatureMessage = () => cy.get('label')
  .contains('Please Add Signature to access forms');

export const getTitle = () => cy.get('h1')
  .contains('CleanSource')
  .contains('&nbsp;Launch Pad');

export const getHoneyCombs = () => cy.get('h1')
  .parent()
  .find('div');
