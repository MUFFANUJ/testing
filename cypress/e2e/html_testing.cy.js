describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.btn').should('contain','0')
    cy.get('.btn').click()
    cy.get('.btn').should('contain','1')
    cy.get('.btn').click()
    cy.get('.btn').should('contain','2')
    cy.get('.btn').click()
    cy.get('.btn').should('contain','3')
  })
})