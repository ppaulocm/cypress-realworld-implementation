import * as Component from './signature.comp';
import * as Home from '../home

export const addNewSignature = () => {
  Home.comp.getAddSignatureButton()
    .click({ force: true });

  Component.getSignatureCanvas()
    .click(200, 110, { force: true })
    .click(205, 115, { force: true })
    .click(210, 120, { force: true })
    .click(215, 125, { force: true });

  Component.getSaveButton()
    .click({ force: true });
};
export const updateSignature = () => {
  Home.comp.getUpdateSignatureButton()
    .click({ force: true });

  Component.getSignatureCanvas()
    .click(200, 110, { force: true })
    .click(205, 115, { force: true })
    .click(205, 115, { force: true })
    .click(210, 120, { force: true })
    .click(215, 125, { force: true });

  Component.getSaveButton()
    .click({ force: true });
};
