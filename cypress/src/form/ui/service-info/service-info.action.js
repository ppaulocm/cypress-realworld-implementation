import * as Component from './service-info.comp';

export const setWeeklyServiceInfo = (daysCleaned, timeWindow, hasFrequency, hasAlarm, hasKey) => {
  cy.log('setWeeklyServiceInfo');

  Component.getWeeklyServiceButton()
    .click();

  daysCleaned.forEach((day) => {
    Component.getWeekDays()
      .contains(day)
      .click();
  });

  if (hasFrequency === true) {
    Component.getAddFrequencyOption()
      .click({ force: true });
  }

  if (hasAlarm === true) {
    Component.getAlarmButton()
      .parent()
      .contains('Yes')
      .children()
      .click();
  }

  if (hasKey === true) {
    Component.getKeysButton()
      .parent()
      .contains('Yes')
      .children()
      .click();
  }

  if (!hasKey) {
    Component.getBooleanOption()
      .children()
      .click();
  }
};

export const setFrequencyWeeklyServiceInfo = (daysCleaned) => {
  daysCleaned.forEach((day) => {
    Component.getFrequencyWeekDays()
      .contains(day)
      .click({ force: true });
  });
};

export const setMonthlyServiceInfo = (cleaningTimes, hasFrequency, timeWindow, hasAlarm, hasKey) => {
  Component.getMonthlyServiceButton()
    .click({ force: true });

  Component.getCleaningTimesPerMonth()
    .click({ force: true });

  cy.get('#select_content_cleaning')
    .find('div')
    .contains(cleaningTimes)
    .click({ force: true });

  Component.getTimeWindow()
    .type(timeWindow, { force: true });

  if (hasFrequency) {
    Component.getAddMonthlyFrequencyOption()
      .click({ force: true });
  }

  if (hasAlarm) {
    Component.getAlarmButton()
      .parent()
      .contains('Yes')
      .children()
      .click();
  }

  if (hasKey) {
    Component.getKeysButton()
      .parent()
      .contains('Yes')
      .children()
      .click();
  }

  if (!hasKey) {
    Component.getBooleanOption()
      .children()
      .click();
  }
};

export const setFrequencyMonthlyServiceInfo = (cleaningTimes) => {
  Component.getSecondCleaningTimesPerMonth()
    .click({ force: true });

  cy.get('#select_content_secondCleaning')
    .find('div')
    .contains(cleaningTimes)
    .click({ force: true });
};

export const smartCleanButton = () => {
  Component.getSmartCleanButton()
    .click({ force: true });
};

export const clickSmartCleanIcon = () => {
  Component.getSmartCleanIcon()
    .click({ force: true });
};
