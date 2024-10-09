// https://on.cypress.io/api

describe('Transition Page', () => {
  it('visits the /transition route', () => {
    cy.visit('/transition')
    cy.contains('button', 'Toggle')
  })
})
