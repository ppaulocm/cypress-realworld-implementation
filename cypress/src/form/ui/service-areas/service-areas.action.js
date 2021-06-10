import * as Component from './service-areas.comp';

export const setServiceAreas = (areas, otherAreas) => {
  areas.forEach((area) => {
    Component.getServiceAreaContent()
      .contains(area)
      .siblings()
      .click();
  });

  if (otherAreas) {
    Component.getOtherAreas()
      .type(otherAreas, { force: true });
  }
};
