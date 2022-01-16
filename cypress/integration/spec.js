/// <reference types="cypress" />

it('does not work', () => {
  cy.visit('index.html')
  cy.get('#next-selector li')
    .first()
    .next('.selected')
    .should('have.text', 'pineapples')
})

it('works', () => {
  cy.visit('index.html')
  cy.get('#next-selector li')
    .first()
    .next().next().next()
    .should('have.text', 'pineapples')
})
