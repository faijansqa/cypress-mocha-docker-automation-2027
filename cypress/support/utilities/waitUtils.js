/**
 * Wait utilities for Cypress commands
 */
class WaitUtils {
    static waitForElement(selector, timeout = 10000) {
        return cy.get(selector, { timeout }).should('exist');
    }
    static waitForElementToBeVisible(selector, timeout = 10000) {
        return cy.get(selector, { timeout }).should('be.visible');
    }
    static waitForElementToBeEnabled(selector, timeout = 10000) {
        return cy.get(selector, { timeout }).should('be.enabled');
    }
    static waitForXPath(xpath, timeout = 10000) {
        return cy.xpath(xpath, { timeout }).should('exist');
    }
}
export default WaitUtils;