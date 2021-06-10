import * as Component from './room-inventory.comp';

export const setRoomInventoryType = (position, roomType) => {
  Component.setRoomType(position, roomType);
};

export const setFloorType = (position, floorType) => {
  Component.setFloorType(position, floorType);
};

export const setLengthWidth = (position, length, width) => {
  Component.setLengthWidth(position, length, width);
};

export const setTotalSquareFeet = (position, sqFeetArea) => {
  Component.setTotalSquareFeet(position, sqFeetArea);
};

export const setProdGroup = (position, prodGroup) => {
  Component.setProdGroup(position, prodGroup);
};

export const setFixtureByNUmber = (position, value) => {
  Component.setFixtureByNUmber(position, value);
};

export const setRoomInventoryItem = (position, roomType, floorType, length, width, sqFeetArea, prodGroup, nfixtures) => {
  setRoomInventoryType(position, roomType);
  setFloorType(position, floorType);

  if ((length) && (width)) {
    setLengthWidth(position, length, width);
    Component.getFixtureByNUmber(position)
      .click({ force: true });
  }

  if (sqFeetArea) {
    setTotalSquareFeet(sqFeetArea);
  }

  if (prodGroup) {
    setProdGroup(position, prodGroup);
  }

  if (nfixtures) {
    setFixtureByNUmber(position, nfixtures);
  }
};

export const deleteRoomInventoryRaw = (position) => {
  Component.getDeleteRawButton(position)
    .click({ force: true });

  cy.get('[data-cy="confirm-button"]')
    .click({ force: true });
};
