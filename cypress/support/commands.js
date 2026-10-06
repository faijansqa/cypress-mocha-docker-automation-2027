import WaitUtils from './utilities/waitUtils';
import ClickUtils from './utilities/clickUtils';
import InputUtils from './utilities/inputUtils';
import DropdownUtils from './utilities/dropdownUtils';
import CheckboxUtils from './utilities/checkboxUtils';
import RadioUtils from './utilities/radioUtils';
import HighlightUtils from './utilities/highlightUtils';

// Register utilities as global objects
// Wait utils
Cypress.Commands.add('waitForElement', WaitUtils.waitForElement);
Cypress.Commands.add('waitForElementToBeVisible', WaitUtils.waitForElementToBeVisible);
Cypress.Commands.add('waitForElementToBeEnabled', WaitUtils.waitForElementToBeEnabled);
Cypress.Commands.add('waitForXPath', WaitUtils.waitForXPath);

// Click utils
Cypress.Commands.add('clickElement', ClickUtils.click);
Cypress.Commands.add('forceClick', ClickUtils.forceClick);
Cypress.Commands.add('clickByText', ClickUtils.clickByText);
Cypress.Commands.add('clickXPath', ClickUtils.clickXPath);

// Input utils
Cypress.Commands.add('typeInput', InputUtils.type);
Cypress.Commands.add('typeWithDelay', InputUtils.typeWithDelay);
Cypress.Commands.add('clearInput', InputUtils.clearInput);
Cypress.Commands.add('paste', InputUtils.paste);

// Dropdown utils
Cypress.Commands.add('selectByValue', DropdownUtils.selectByValue);
Cypress.Commands.add('selectByText', DropdownUtils.selectByText);
Cypress.Commands.add('selectByIndex', DropdownUtils.selectByIndex);
Cypress.Commands.add('verifyOption', DropdownUtils.verifyOption);

// Checkbox utils
Cypress.Commands.add('checkCheckbox', CheckboxUtils.check);
Cypress.Commands.add('uncheckCheckbox', CheckboxUtils.uncheck);
Cypress.Commands.add('verifyCheckboxChecked', CheckboxUtils.verifyChecked);

// Radio utils
Cypress.Commands.add('selectRadio', RadioUtils.selectRadio);
Cypress.Commands.add('verifyRadioChecked', RadioUtils.verifyRadioChecked);
Cypress.Commands.add('verifyRadioUnchecked', RadioUtils.verifyRadioUnchecked);

// Highlight utils
Cypress.Commands.add('highlight', HighlightUtils.highlight);
Cypress.Commands.add('removeHighlight', HighlightUtils.removeHighlight);

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitUntil', (condition) => {
    return new Cypress.Promise((resolve) => {
        const interval = setInterval(() => {
            if (condition()) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
});
