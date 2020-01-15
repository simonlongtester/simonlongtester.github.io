/// <reference types="Cypress" />
//the line above allows intellisense to be used by this line


//instead of describe , the mocha keyword can be used.  like specif and it both do the same thing albeit at test suite level
describe ('this is a test template' , function () {

 it ('this is the name of a test that visits cypress' , function () {
    cy.visit('https://example.cypress.io')
    //below provides a break point stopping place in code
    cy.pause ()
    //the below line locates the word 'type' on the page i.e in the first page element.  
    //once it has found it, the Click command cliks on the element
    cy.contains('type').click ()
    //the below gets the url that has been loaded
    //the 'include' is a sub command and not content
    cy.url().should('include', '/commands/actions')

// Get an input, type into it and verify that the value has been updated
//note: the below could be all on one line but can be split upto allow for ease of read. howver do not put cy at start ofeach line as this will 
//indicate a new statement
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
})
//the keywords it and specifc have exactly the same purposse.both are defined in mocha and are two ways to define a name of a test.  
 //specify ('this is a test that vists the bbc', function () {
    //cy.visit ('www.bbc.co.uk') 
    //cy.get('.hp-banner__text').contains ('BBC')
    //cy.get('#orb-search-q').type ('Man United').contains('Man United')

//})

})

// up to https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-2-Query-for-an-element
