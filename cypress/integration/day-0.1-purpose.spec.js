/// <reference types="Cypress" />

/**
 * @abstract: Know the name and the purpose of app
 *
 * @criteria
  As first time visiting user to the spaced repetition site:
  - I see the name of the learning app, and a brief description.
*/
describe(`User story: Application name and purpose`, function() {
  it('has h1 with title', () => {
    cy.visit('/')
    cy.get('header h1')
      .should('contain', 'Spaced repetition')
      .get('p')
      .should(
        'have.text',
        'e learning essential French words for the perfect trip to the boulongerie with the spaced reptition revision technique.'
      )
  })
})
