export const createForm = (body, varName) => {
  const options = {
    method: 'POST',
    url: `${Cypress.env('api').host}/api/FormSheet`,
    body,
  };

  cy.log(JSON.stringify(body));

  return cy.request(options)
    .then((res) => {
      expect(res.status).to.equal(200);
      Cypress.env(varName, res.body.id);
    });
};
