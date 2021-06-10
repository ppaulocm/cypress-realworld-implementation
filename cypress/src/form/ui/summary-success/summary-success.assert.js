import * as Component from './summary-success.comp';

export const successMessage = () => {
  Component.getSuccessMessage()
    .should('contain', 'Your Proposal was saved successfully');
};

export const customizedServicePrice = (value, price) => {
  Component.getEntireSummaryQuote(value)
    .should('contain', price);
};
