export const formPageTitle = () => {
  cy.get('span')
    .contains('Loading')
    .should('not.exist');

  cy.get('h1')
    .should('be.visible')
    .should('have.text', 'Form Information Sheet');
};

export const ssPageTitle = () => {
  cy.get('span')
    .contains('Loading')
    .should('not.exist');

  cy.get('h1')
    .should('be.visible')
    .should('have.text', 'Specialty Service(s) Info');
};

export const redBanner = () => {
  cy.get('.check-connection-message')
    .should('contain', 'Attention')
    .should('contain', 'The Auto-Save will only be enabled after the PID Field is populated.')
    .should('be.visible');
};

export const pidTooltip = () => {
  cy.get('[id="pidTooltip"]')
    .should('contain', 'Enter a PID to enable Auto-Save')
    .should('be.visible');
};
