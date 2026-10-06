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
  
  it('User cannot log in with invalid credentials', function () {
    sauceDemoLoginPage.login(this.credentials.invalidUser.username, this.credentials.invalidUser.password);
    sauceDemoLoginPage.verifyErrorMessage('Username and password do not match any user in this service');
  });

});
