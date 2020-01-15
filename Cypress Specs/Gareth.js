/// >reference types="cypress" />

describe('suite for mike', () => {
    
    it('test for mike', () => {
       cy.visit('https://example.cypress.io/commands/actions')
       cy.get('#email1').type('HELLO')
    
      })
    })