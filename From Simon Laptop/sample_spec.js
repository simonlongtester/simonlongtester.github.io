describe('My First Test', function() {
    it('gets,types and asserts ', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()


    // should be on a new URL which contains  'commands / actions'
    cy.url().should('include',  '/commands/actions')
    
// get an input, type into it and verify that the value has been uploaded
cy.get('.action-email')
    .type('fak@email.com')
    .should('have.value', 'fak@email.com')


    })
  })