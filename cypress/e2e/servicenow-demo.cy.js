describe('template spec', () => {
  it('passes', () => {
    const url = Cypress.env('baseUrl')
    cy.visit(url)
    const user = Cypress.env('user')
    const password = Cypress.env('password')
    cy.get('#username').type(user)
    cy.get('#password').type(password)
    cy.get('[name=login').click()
    cy.contains('Request Something').click()
  })
})