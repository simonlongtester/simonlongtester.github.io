/// <reference types="cypress" />

describe('does this work?', function() {

    it('should display the web page correcly', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('body').contains('Kitchen') 
        ///cy.visit('https:/.co.uk')
    
      })
})
