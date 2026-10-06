/// <reference types="cypress"/>
import AddToCartPage from "../pages/addToCartLocatorPage";

const addToCartPageLoc = new AddToCartPage();

export class AddToCartActionPage {

    selectBag() {
        cy.wait(2000);
        addToCartPageLoc.gearMenu().trigger('mouseover')
        addToCartPageLoc.bags().click();
        addToCartPageLoc.bagsHeading().should('be.visible');
    }

    clickOnBagsByText(text) {
        addToCartPageLoc.bagsList().each(($el) => {
            if ($el.innerText.includes(text)) {
                cy.wrap($el).click();
            }
        });
    }

    clickOnBagByTextEle(text) {
        return addToCartPageLoc.bagsList().contains(text).click();
    }

    verifyTheBagPrice(amount) {
        addToCartPageLoc.bagPrice().invoke('text').then((text) => {
            const price = Number(text.replace(/[^0-9.-]+/g, ""));
            cy.log(price);
            expect(price).to.equal(amount);
        });
    }

    verifyAddToCartItem() {
        addToCartPageLoc.addToCartCTA().click();
        cy.wait(3000);
        addToCartPageLoc.successMsg().should('be.visible');
        addToCartPageLoc.myCart().click();
        cy.wait(2000);
        addToCartPageLoc.proceedToCheckout().click();
    }

    verifyOrderSummary() {
        cy.wait(4000);
        addToCartPageLoc.orderSummary().should('be.visible');
    }

}