//import email from '../fixtures/data.json'


describe(`after visiting ["www.welcometothejungle.com/fr/me/settings/account"] webpage, clicking on ["Se connecter"] button, filling ["Email", "Mot de passe"] inputs, clicking ["Se connecter"] button, filling ["Photo de profil"] input and clicking on ["OK"] button`, () => {

  before(() => {
    cy.visit('fr/me/settings/account')
    // ...
  })

  after(() => {
    // ...
  })

  it("_profile-avatar data are updated", () => {
    // ...
    cy.url().should('contains', 'www.welcometothejungle.com/fr/signin')
    
    cy.get('.sc-cVAmsi > [data-testid="login-field-email"]')
    .should('be.visible')
    .type('inqom.qaautomationapplicant@gmail.com')

    cy.get('[data-testid="login-field-password"]')
    .should('be.visible')
    .type('o5N,d5ZR@R7^')
    
    cy.get('[data-testid="login-button-submit"]')
    .should('be.visible')
    .click()
    
    cy.url().should('contains', 'www.welcometothejungle.com/fr/me/settings/account')


  })




})