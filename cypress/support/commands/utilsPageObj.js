/// <reference types="cypress"/>

class TextBoxPage{

    seachInpunt(){
        return cy.get('.RNNXgb')
    }

    acceptmodal(){
        return cy.get('#L2AGLb .QS5gu')
    }

    buttonSearchWithGoogle(){
        return cy.get(".gNO89b").contains("Buscar con Google")
    } 
   
    getAmoutResult(){
        return cy.get("#result-stats",{timeout: 5000})
    } 
}

export default TextBoxPage