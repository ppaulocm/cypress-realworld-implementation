import * as Component from './client-info.comp';

export const setClientInfo = (companyName, address, suite, city, state, postalCode, phone, mobilePhone, county) => {
  cy.log('Fill client information');

  Component.getCompanyName()
    .type(companyName, { force: true });

  Component.getAddress()
    .type(address, { force: true });

  Component.getSuite()
    .type(suite, { force: true });

  Component.getCity()
    .type(city, { force: true });

  Component.getState()
    .type(state, { force: true });

  Component.getPostalCode()
    .type(postalCode, { force: true });

  Component.getPhone()
    .type(phone, { force: true });

  Component.getMobilePhone()
    .type(mobilePhone, { force: true });

  Component.getCount()
    .type(county, { force: true });
};

export const setSicCode = (value) => {
  cy.log('Fill content sid');

  Component.getSelectButton()
    .click({ force: true });

  Component.getSicCodeContent()
    .contains(value)
    .click({ force: true });
};
