/**
 * Click utilities for Cypress commands
 */
class ClickUtils {
    static click(selector) {
        return cy.get(selector).click();
    }
    static forceClick(selector) {
        return cy.get(selector).click({ force: true });
    }
    static clickByText(text) {
        return cy.contains(text).click();
    }
    static clickXPath(xpath) {
        return cy.xpath(xpath).click();
    }
}
export default ClickUtils;