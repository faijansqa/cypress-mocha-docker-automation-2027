/// <reference types="cypress"/>

import { AddToCartActionPage } from "../actions/addToCartActionPage";


describe.skip('Add to cart test suite', () => {

  before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((credentials) => {
      cy.wrap(credentials).as('credentials');
      cy.log('Credentials loaded:', JSON.stringify(credentials));
    });
    cy.fixture('testData').then((testData) => {
      cy.wrap(testData).as('testData');
      cy.log('Test data loaded:', testData);
    });
  });

  it('User adds a bag to the cart', function () {
    const addToCartPageLoc = new AddToCartActionPage();
    cy.get('@credentials').then((credentials) => {
      cy.visit(credentials.baseUrl);
      cy.title().should('include', 'Home Page');
    });
    addToCartPageLoc.selectBag();
    const bagText = this.testData.bagText;
    const amount = this.testData.bagAmount;
    addToCartPageLoc.clickOnBagByTextEle(bagText);
    addToCartPageLoc.verifyTheBagPrice(amount);
    addToCartPageLoc.verifyAddToCartItem();
    addToCartPageLoc.verifyOrderSummary();
  });
})
