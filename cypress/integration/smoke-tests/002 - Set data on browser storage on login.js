import * as Home from '../../src/landind-page/home';
import * as Signature from '../../src/landind-page/signature';
import * as User from '../../src/users/api/user';

describe('Login', () => {
  it('Set data on browser storage on login', () => {
    const username = 'userqa';
    const password = 'test123';

    User.login(username, password);

    cy.visit(Cypress.env('loginUrl'));

    Home.comp.getNoticeWarnMessage().should('contain', 'Notice');

    Signature.action.updateSignature();

    Home.comp.getUpdateSignatureButton().should('contain', 'Update');
  });
});
