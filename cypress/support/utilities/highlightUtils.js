/**
 * Highlight utilities for Cypress commands
 */
class HighlightUtils {
    static highlight(selector) {
        cy.get(selector).then($element => {
            $element.css('border', '2px solid red');
            $element.css('background-color', 'yellow');
        });
    }
    static removeHighlight(selector) {
        cy.get(selector).then($element => {
            $element.css('border', '');
            $element.css('background-color', '');
        });
    }
}
export default HighlightUtils;