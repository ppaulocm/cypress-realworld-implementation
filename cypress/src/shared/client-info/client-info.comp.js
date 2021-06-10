export const getCompanyName = () => cy.get('[id="companyName"]');

export const getAddress = () => cy.get('[id="address"]');

export const getSuite = () => cy.get('[id="suite"]');

export const getCity = () => cy.get('[id="city"]');

export const getState = () => cy.get('[id="state"]');

export const getPostalCode = () => cy.get('[id="postalCode"]');

export const getPhone = () => cy.get('[id="phone"]');

export const getMobilePhone = () => cy.get('[id="mobilePhone"]');

export const getCount = () => cy.get('[id="county"]');

export const getSicCodeInput = () => cy.get('[data-cy="sic_input"]');

export const getSicCodeContent = () => cy.get('[data-cy="sic_dropdown_content_wrapper"]');

export const getSelectButton = () => cy.get('[data-cy="sic_btn_select"]');

export const getClientType = (value) => cy.get('button')
  .contains(value);
