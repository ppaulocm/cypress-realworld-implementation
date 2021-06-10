import * as Component from './header-info.comp';

export const setHeaderInfo = (masterCity, pid, sid, control) => {
  cy.log('Fill in the header fields');

  Component.getMasterCity()
    .select(masterCity);

  Component.getPidField()
    .focus()
    .type(pid);

  Component.getSidField()
    .type(sid);

  Component.getControlField()
    .type(control);
};
