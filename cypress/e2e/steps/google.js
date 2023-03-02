import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import TextBoxPage from "../../support/commands/utilsPageObj"
import TextBoxACtions from "../../support/commands/utilsactions"

const googlePage = new TextBoxPage();
const googleActions = new TextBoxACtions();

Given('I open Google page', () => {
  cy.visit('/');
});

When('search by {string}', (search) => {
  googlePage.acceptmodal().click();
  googlePage.seachInpunt().type(search);
  googlePage.buttonSearchWithGoogle().click({ force: true });
})

Then('the result should be {string} and have {int}', (length, amount) => {
  googlePage.getAmoutResult().invoke("text").then(($result) => {
    const results = googleActions.parseField($result)
    cy.wrap(results).should(`be.${length}`, amount)
  })
})

