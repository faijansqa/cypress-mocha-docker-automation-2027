/**
 * Checkbox utilities for Cypress commands
 */
class CheckboxUtils {
    static check(selector) {
        return cy.get(selector).check();
    }
    static uncheck(selector) {
        return cy.get(selector).uncheck();
    }
    static verifyChecked(selector) {
        return cy.get(selector).should('be.checked');
    }
}
export default CheckboxUtils;