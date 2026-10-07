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

  it('Locked out user cannot log in', function () {
    sauceDemoLoginPage.login(this.credentials.lockedOutUser.username, this.credentials.lockedOutUser.password);
    sauceDemoLoginPage.verifyErrorMessage('Sorry, this user has been locked out.');
  });

  it('Empty test to check the github branch compatibility', function () {

  });

});
