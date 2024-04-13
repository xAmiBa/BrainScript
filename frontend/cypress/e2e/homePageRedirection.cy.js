
describe('Redirect from HomePage to Setup Page', () => {
    it('click next buton and redirect to setup page', () => {
    // https://on.cypress.io/click
    cy.visit('http://localhost:5001/')
    cy.get('.next-button').click()
    cy.url().should('include', '/setup')
    })

})