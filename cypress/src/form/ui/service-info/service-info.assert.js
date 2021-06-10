import * as Component from './service-info.comp';

export const serviceInfoContent = (value) => {
  Component.getServiceInfoContent(value)
    .should('contain', value);
};

export const smartCleanTooltip = (value) => {
  Component.getSmartCleanTooltip()
    .should('contain', value);
};
