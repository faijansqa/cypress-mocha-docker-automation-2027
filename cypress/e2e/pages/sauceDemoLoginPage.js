import WaitUtils from '../../support/utilities/waitUtils';

const SauceDemoLoginLocators = {
    username: "[data-test='username']",
    password: "[data-test='password']",
    loginCTA: "[data-test='login-button']",
    errorMessage: "[data-test='error']",
    pageTitle: "[data-test='title']",
    burgerMenu: "#react-burger-menu-btn",
    logoutCTA: "[data-test='logout-sidebar-link']"
}

export class SauceDemoLoginPage {

    login(username, password) {
        cy.get(SauceDemoLoginLocators.username).should('be.visible').clear().type(username);
        cy.get(SauceDemoLoginLocators.password).clear().type(password, { log: false });
        cy.get(SauceDemoLoginLocators.loginCTA).click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html');
        cy.get(SauceDemoLoginLocators.pageTitle).should('have.text', 'Products');
    }

    verifyErrorMessage(message) {
        cy.get(SauceDemoLoginLocators.errorMessage).should('be.visible').and('contain.text', message);
    }

    logout() {
        cy.get(SauceDemoLoginLocators.burgerMenu).click();
        WaitUtils.waitForElementToBeVisible(SauceDemoLoginLocators.logoutCTA);
        cy.get(SauceDemoLoginLocators.logoutCTA).click();
        cy.get(SauceDemoLoginLocators.loginCTA).should('be.visible');
    }

}
