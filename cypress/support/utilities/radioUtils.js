/**
 * Radio button utilities for Cypress commands
 */
class RadioUtils {
    static selectRadio(selector) {
        return cy.get(selector).check();
    }
    static verifyRadioChecked(selector) {
        return cy.get(selector).should('be.checked');
    }
    static verifyRadioUnchecked(selector) {
        return cy.get(selector).should('not.be.checked');
    }
}
export default RadioUtils;