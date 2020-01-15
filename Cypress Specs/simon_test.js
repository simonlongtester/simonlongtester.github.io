describe('My second Test', function() {
    it('can logon to bbc.co.uk', function() {
      expect(true).to.equal(true)
      cy.visit (newFunction())
      cy.get('input#orb-search-q')
      .type('Password01')
    })
  })

function newFunction() {
    return 'msdev-very-qqlvosoq.lsdg.com/account/login.page'
}
