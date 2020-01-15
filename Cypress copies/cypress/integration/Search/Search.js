
describe('Search Very', function() {
   it('Visits a gallery page', function() {
    
    cy.visit('https://msdev-very-qqlvosoq.lsdg.com/sports-leisure/e/b/2780.end')
    cy.get('input#header-searchInput.hasPlaceholdText').type('red').should('have.value', 'red')
    cy.get('input.header-searchBtn').click()
    cy.title().should('eq', 'Red | msdev-very-qqlvosoq.lsdg.com')
    cy.get('a#fsGalleryBanner.bnplNew').click()
    cy.get('a#fsGalleryBanner.bnplNew').should('be.visible', )
    cy.get('span.ui-icon.ui-icon-closethick').click()
    cy.get('leigh.rathbone').click()

 })
}) 