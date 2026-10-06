/// <reference types="cypress"/>

import { SauceDemoLoginPage } from "../pages/sauceDemoLoginPage"

const sauceDemoLoginPage = new SauceDemoLoginPage();

describe('SauceDemo login test suite', () => {

  beforeEach(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).as('credentials');
    cy.get('@credentials').then((credentials) => {
      cy.visit(credentials.baseUrl);
      cy.title().should('eq', 'Swag Labs');
    });
  });

  it('User logs in with valid credentials and logs out', function () {
    sauceDemoLoginPage.login(this.credentials.validUser.username, this.credentials.validUser.password);
    sauceDemoLoginPage.verifyLoginSuccess();
    sauceDemoLoginPage.logout();
  });

});
