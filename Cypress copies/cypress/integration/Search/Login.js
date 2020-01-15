
describe('Login page', function() {
  it('Invalid login', function() {
    cy.server()
    cy.route('**/galleryInfo.jsp*','fixture:Home/galleryInfo' )
    cy.visit('https://msdev-very-qqlvosoq.lsdg.com/account/login.page')
    cy.get('input#loginID.textInput')
      .type('hacker@tryingtogetin.com').should('have.value', 'hacker@tryingtogetin.com')
    cy.get('input#loginPassword.textInput')
      .type('password').should('have.value', 'password')
    cy.get('input#loginPostcode.textInput')
      .type('BA13HN').should('have.value', 'BA13HN')
    
    cy.get('input#existingCustomerSubmitButton.primBtn').click()
    cy.get("ul#errorList").should('contain.text',"The log in details provided do not match our records, please try again. After 5 incorrect attempts we will lock your account and send you an email advising you what to do next.")
  })

  it('Valid login', function() {
    cy.server()
    cy.route('**/galleryInfo.jsp*','fixture:Home/galleryInfo' )
    cy.visit('https://msdev-very-qqlvosoq.lsdg.com/account/login.page')
    cy.get('input#loginID.textInput')
      .type('fake@fakebotverycouk.com').should('have.value', 'fake@fakebotverycouk.com')
    cy.get('input#loginPassword.textInput')
      .type('Password01').should('have.value', 'Password01')
    cy.get('input#loginPostcode.textInput')
      .type('BA13HN').should('have.value', 'BA13HN')
    
    cy.get('input#existingCustomerSubmitButton.primBtn').click()
    cy.contains("hard logged in").should('exist')
  })
})