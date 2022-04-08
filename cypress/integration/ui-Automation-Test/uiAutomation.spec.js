/// <reference types="cypress" />
import TextBoxPage from "../../support/commands/utilsPageObj"
import TextBoxACtions from "../../support/commands/utilsactions"
describe('uiAutomation', () => {

  const googlePage = new TextBoxPage();
  const googleActions = new TextBoxACtions();
  beforeEach(() => {
    cy.visit('/');
  });

  it('More than 100,000 results ', () => {
    googlePage.acceptmodal().click();
    googlePage.seachInpunt().type("orange bank");
    googlePage.buttonSearchWithGoogle().click({force:true});
    googlePage.getAmoutResult().invoke("text").then(($result)=>{
      const length = googleActions.parseField($result)
     cy.wrap(length).should("be.greaterThan",100000)
    })
  });

  it('Less than 10,000 results  ', () => {
    googlePage.acceptmodal().click();
    googlePage.seachInpunt().type("orange bank");
    googlePage.buttonSearchWithGoogle().click({force:true});
    googlePage.getAmoutResult().invoke("text").then(($result)=>{
      const length = googleActions.parseField($result)
     cy.wrap(nulengthmb).should("be.lessThan",10000)
    })
  });
})
