export const create = (firstName, lastName, email, userName, password) => {
  const header = {
    'Content-Type': 'application/json',
  };

  const data = JSON.stringify({
    UserId: '0',
    FirstName: `${firstName}`,
    LastName: `${lastName}`,
    Email: `${email}`,
    UserName: `${userName}`,
    Password: `${password}`,
    Title: 'owner',
    Roles: [
      'Corporate Admin',
    ],
    Screens: [],
    Forms: ['9', '7', '8', '6', '2'],
    Franchises: [
      '1055',
    ],
    IsOptIn: false,
    IsOptInCleanCom: true,
    IsOptInBroadcast: false,
  });

  const options = {
    method: 'POST',
    url: Cypress.env('api').createUser,
    headers: header,
    body: data,
  };

  return cy.request(options)
    .then((res) => {
      expect(res.status).to.equal(200);
    });
};

export const login = (username, password) => {
  const options = {
    method: 'GET',
    url: `${Cypress.env('api').login}?username=${username}&password=${password}`,
  };

  return cy.request(options)
    .then((res) => {
      cy.log(res);

      const { accessToken } = res.body;
      const { expiresDate } = res.body;
      const { refreshToken } = res.body;

      window.localStorage.setItem('Tester_USER_ACCESS_TOKEN', accessToken);
      window.localStorage.setItem('Tester_USER_EXPIRE_DATE', expiresDate);
      window.localStorage.setItem('Tester_USER_REFRESH_TOKEN', refreshToken);
      expect(res.status).to.equal(200);
    });
};
