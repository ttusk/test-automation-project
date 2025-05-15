export default class items {
  navigateToCloth() {
    cy.get("[aria-label='TabletsCategory']").click();
  }

  SelectItem() {
    cy.get(".productName").first().click();
  }

  AddToCart() {
    cy.get("#product .save").click();
  }

  checkoutitem() {
    cy.get("#menuCart").click();
    cy.get(".cart .checkOutButton").click();
  }

  cartPage() {
    cy.url().should("include", "orderPayment");
  }
}
