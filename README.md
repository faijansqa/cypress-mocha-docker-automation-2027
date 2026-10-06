# 📘 Cypress Mocha Automation Framework (JavaScript)

This framework is a **Cypress-based test automation** setup for testing the **Luma eCommerce** application. It uses the **Mocha** test runner and follows the **Page Object Model (POM)** structure for maintainable, scalable test automation.

---

## 📁 Folder Structure:

Luma-Cypress-POC-2025/  
│    
├── cypress/  
│   ├── e2e/  
│   │   ├── actions/               # This folder contains JS files with business logic.  
│   │   │                          # Example: loginActionPage.js handles the login steps.  
│   │   │  
│   │   ├── pages/                 # This contains Page Object files with element locators.  
│   │   │                          # Example: loginLocatorPage.js stores selectors for login elements.  
│   │   │  
│   │   ├── tests/                 # This folder contains actual test cases.  
│   │                              # Example: loginTest.cy.js runs the login test using actions/pages.  
│   │  
│   ├── fixtures/                  # This holds test data and environment-specific credentials.  
│   │   ├── testData.json          # Common test data like email, password, etc.  
│   │   ├── dev/                   # Development environment credentials.  
│   │   └── production/            # Production environment credentials.  
│   │  
│   ├── support/  
│       ├── commands.js            # Custom Cypress commands (like reusable login command).  
│       └── e2e.js                 # Runs before every test — used for setup code.  
│  
├── cypress.config.js              # Main Cypress configuration file.  
├── package.json                   # Project dependencies and npm scripts.  
├── package-lock.json              # Auto-generated file to lock dependency versions.  

---

## 📌 In Simple Terms:

- **tests/** – Where your **test scenarios** live  
- **actions/** – Where your **test steps** (e.g., login actions) are written using page objects  
- **pages/** – Where you define **UI elements** (selectors/locators)  
- **fixtures/** – Where **test data and credentials** for dev/production are stored  
- **support/** – Where **custom commands** and **setup hooks** reside  
- **cypress.config.js** – Tells Cypress how to behave (config, baseUrl, timeouts, etc.)

---

## 🔧 Setup Instructions:

**1. Clone the repo:**

- https://github.com/testshadab/cypress-mocha-automation-2025.git
---

**2. Install dependencies:**
- npm install
---

**3. Running Tests:**
- Running Tests in headless mode (CLI)
- npx cypress run

- Running Tests in headed mode (UI)
- npx cypress run --headed
---

**4. Interactive mode (GUI):**
- npx cypress open
- Select the E2E Testing
- Select the browser (eg. Chrome) and click on Start E2E Testing in Chrome
- Select the test that want to run 
---

## 🌐 Environment Configuration:
**The framework supports multiple environments like dev and production.
To run against a specific environment, update your test or use Cypress environment variables as needed:**

- npx cypress run --env environment=dev
---

**Test credentials and other data are stored under:**
- cypress/fixtures/dev/credentials.json
- cypress/fixtures/production/credentials.json
---

## 📸 Reports, Videos, and Screenshots:
**Screenshots of failed tests are saved in:**
- cypress/screenshots/
---

**Videos of test runs (if enabled):**
- cypress/videos/
---
