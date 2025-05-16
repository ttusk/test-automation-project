// Cypress.Commands.add('usernameField', () => {
//     cy.get('[data-test="username"]')
// });

// Cypress.Commands.add('passwordField', () => {
//     cy.get('[data-test="password"]')
// });

// Cypress.Commands.add('loginBtn', () => {
//     cy.get('[data-test="login-button"]')
// });

// Cypress.Commands.add('errorMsg', () => {
//     cy.get('[data-test="error"]')
// });

// Cypress.Commands.add('loginWith', (username, password) => {
//     cy.visit('https://www.saucedemo.com')
//     cy.usernameField().type(username)
//     cy.passwordField().type(password)
//     cy.loginBtn().click()
// });










// Cypress.Commands.add("openStore", () => {
//   cy.visit("https://advantageonlineshopping.com/#/");
// });

// Cypress.Commands.add("selectAndAddToCart", () => {
//   cy.get("[aria-label='TabletsCategory']").click();

//   cy.get(".productName").first().click();

//   // Wait until the product page loads (URL contains '/product/')
//   cy.url().should('include', '/product/');

//   // Wait for the product API call to finish before interacting
//   cy.intercept('/catalog/api/v1/products/*').as('getProduct');
//   cy.wait('@getProduct');

//   // Click the Add to Cart button with a longer timeout and force click if needed
//   cy.get('button[name="save_to_cart"]', { timeout: 15000 })
//     .should('be.visible')
//     .click({ force: true });
// });

// commands.js

Cypress.Commands.add("openStore", () => {
  cy.visit("https://advantageonlineshopping.com/#/");
});

Cypress.Commands.add("selectAndAddToCart", () => {
  // Navigate to Tablets category
  cy.get("[aria-label='TabletsCategory']").click();

  // Wait for product tiles to load and click the first full product card
  cy.get(".categoryRight li")
    .first()
    .should("be.visible")
    .click();

  // Ensure we are on the product page
  cy.url().should("include", "/product/");

  // Intercept product API call to ensure the page is fully loaded
  cy.intercept('/catalog/api/v1/products/*').as('getProduct');
  cy.wait('@getProduct');

  // Click the Add to Cart button reliably
  cy.get('button[name="save_to_cart"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });
});
