export const getRoomLine = (position) => cy.get('.room-inventory-content')
  .find('tbody > tr')
  .eq(position - 1);

export const setRoomType = (position, type) => {
  getRoomLine(position)
    .find('td')
    .eq(0)
    .click({ force: true })
    .type(type)
    .type('{enter}');
};

export const getRoomType = (position) => getRoomLine(position)
  .find('td')
  .eq(0);

export const getRoomTypeInput = () => cy.get('[data-cy="roomType_input"]');

export const getRoomTypeDropdownContentWrapper = () => cy.get('[data-cy="roomType_dropdown_content_wrapper"]');

export const setFloorType = (position, type) => {
  getRoomLine(position)
    .find('td')
    .eq(1)
    .click({ force: true })
    .type(type)
    .type('{enter}');
};

export const setLengthWidth = (position, length, width) => {
  getRoomLine(position)
    .find('td')
    .eq(2)
    .find('[name="length"]')
    .click({ force: true })
    .type(length);

  getRoomLine(position)
    .find('td')
    .eq(2)
    .find('[name="width"]')
    .click({ force: true })
    .type(width);
};

export const setTotalSquareFeet = (position, sqFeetArea) => {
  getRoomLine(position)
    .find('td')
    .eq(3)
    .find('[name="totalSqft"]')
    .click({ force: true })
    .type(sqFeetArea);
};

export const getTotalSquareFeet = (position) => getRoomLine(position)
  .find('td')
  .eq(3)
  .find('[name="totalSqft"]');

export const setProdGroup = (position, value) => {
  getRoomLine(position)
    .find('td')
    .eq(4)
    .find('input')
    .click({ force: true })
    .clear({ force: true })
    .wait(500)
    .type(value)
    .wait(500)
    .type('{enter}');
};

export const getFixtureByNUmber = (position) => getRoomLine(position)
  .find('td')
  .eq(5)
  .find('.input-number');

export const setFixtureByNUmber = (position, value) => {
  getRoomLine(position)
    .find('td')
    .eq(5)
    .find('.input-number')
    .click({ force: true })
    .type(value);
};

export const getDeleteRawButton = (position) => getRoomLine(position)
  .find('td')
  .eq(6)
  .find('button');
