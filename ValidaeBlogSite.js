/// <reference types="Cypress" />

describe('Validating My Blog Site', function() {
    it('Does my home page appear', function() {
       cy.visit('https://simonlongtester.github.io/')
       cy.url().should('include', '/simonlongtester.github.io')
       cy.get('[href="https://simonlongtester.github.io/"] > h2').contains('Simon Long')
       cy.get('.button').should('contain', 'Follow me on GitHub')
       cy.contains('Simon Long Tester - | Coach | Leader | Advocate |')
       cy.contains('Follow me on')
       cy.contains('Latest Blogs')
       cy.get('ul > :nth-child(1) > a').contains('Linkedin')
    })

    it('Does my first blog page appear', function() {
        cy.contains('How I fell').click()
        cy.url().should('include', '/mytestingjourney')
        cy.contains('Wow. So here we are')
     })
    
})
