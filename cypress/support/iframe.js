Cypress.Commands.add('getIframe', () => {
  cy.log('Get IframeBody');

  return cy
    .get('div[id="snfiller"]', { timeout: 180000 })
    .find('iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then((body) => {
      cy.log(body);
      return cy.wrap(body)
        .then((body) => cy.wrap(body[0]));
    });
});
