/**
 * Input utilities for Cypress commands
 */
class InputUtils {
    static type(selector, text) {
        return cy.get(selector).clear().type(text);
    }
    static typeWithDelay(selector, text, delay = 100) {
        return cy.get(selector).clear().type(text, { delay });
    }
    static clearInput(selector) {
        return cy.get(selector).clear();
    }
    static paste(selector, text) {
        return cy.get(selector).invoke('val', text);
    }
}
export default InputUtils;