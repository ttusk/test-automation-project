Cypress.Commands.add('usernameField', () => {
    cy.get('[data-test="username"]')
});

Cypress.Commands.add('passwordField', () => {
    cy.get('[data-test="password"]')
});

Cypress.Commands.add('loginBtn', () => {
    cy.get('[data-test="login-button"]')
});

Cypress.Commands.add('errorMsg', () => {
    cy.get('[data-test="error"]')
});

Cypress.Commands.add('loginWith', (username, password) => {
    cy.visit('https://www.saucedemo.com')
    cy.usernameField().type(username)
    cy.passwordField().type(password)
    cy.loginBtn().click()
});










Cypress.Commands.add("openStore", () => {
  cy.visit("https://advantageonlineshopping.com/#/");
});

Cypress.Commands.add("selectAndAddToCart", () => {
  cy.get("[aria-label='TabletsCategory']").click();
  cy.get(".productName").first().click();
  cy.get("#product .save").click();
});

