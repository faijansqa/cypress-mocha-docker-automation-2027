/// <reference types="cypress"/>

import { LoginPage } from "../pages/loginLocatorPage"

const loginPageLoc = new LoginPage();

describe.skip('Login test suite', () => {

  before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((credentials) => {
      cy.wrap(credentials).as('credentials');
      cy.log('Credentials loaded:', JSON.stringify(credentials));
    });
  });

  it('User login test', () => {
    cy.get('@credentials').then((credentials) => {
      cy.visit(credentials.baseUrl);
      cy.title().should('include', 'Home Page');
      loginPageLoc.login(credentials.email, credentials.password);
    });
    loginPageLoc.verifyLogoutCTA();
  });

});
