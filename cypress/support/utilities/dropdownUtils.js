/**
 * Dropdown utilities for Cypress commands
 */
class DropdownUtils {
    static selectByValue(selector, value) {
        return cy.get(selector).select(value);
    }
    static selectByText(selector, text) {
        return cy.get(selector).select(text);
    }
    static selectByIndex(selector, index) {
        return cy.get(selector).select(index);
    }
    static verifyOption(selector, option) {
        return cy.get(selector).should('have.value', option);
    }
}
export default DropdownUtils;