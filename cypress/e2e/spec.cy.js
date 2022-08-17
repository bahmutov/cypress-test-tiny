/// <reference types="cypress" />
describe('cy.log', () => {
  it('works', () => {
    cy.wrap(42).should('equal', 42)
  })

  it('does not work', () => {
    // not working in Cypress v10.6.0
    // not working in v10.5.0
    // worked in v10.4.0
    // fails with "null" not equal 42
    cy.wrap(42).then(cy.log).should('equal', 42)
  })
})
