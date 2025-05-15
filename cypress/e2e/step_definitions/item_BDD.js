import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import environment from "../../POM/env";
import items from "../../POM/items";

const env = new environment();
const browse = new items();

Given("Navigate to website store", () => {
  env.dev();
});

When("The user selects item", () => {
  browse.navigateToCloth();
});

When("Add it to cart", () => {
  browse.SelectItem();
  browse.AddToCart();
});

When("Checkout the item", () => {
  browse.checkoutitem();
});

Then("It Navigates to cart page", () => {
  browse.cartPage();
});
