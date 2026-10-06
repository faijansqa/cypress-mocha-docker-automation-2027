/// <reference types="cypress"/>

import { SauceDemoLoginPage } from "../pages/sauceDemoLoginPage"

const sauceDemoLoginPage = new SauceDemoLoginPage();

describe('SauceDemo login test suite', () => {

  beforeEach(() => {
    cy.fixture('saucedemo/credentials.json').as('credentials');
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

  it('Locked out user cannot log in', function () {
    sauceDemoLoginPage.login(this.credentials.lockedOutUser.username, this.credentials.lockedOutUser.password);
    sauceDemoLoginPage.verifyErrorMessage('Sorry, this user has been locked out.');
  });

  it('User cannot log in with invalid credentials', function () {
    sauceDemoLoginPage.login(this.credentials.invalidUser.username, this.credentials.invalidUser.password);
    sauceDemoLoginPage.verifyErrorMessage('Username and password do not match any user in this service');
  });

});
