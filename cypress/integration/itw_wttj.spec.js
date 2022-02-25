import data from "../fixtures/ids/data.json" 
//import png from "../fixtures/img/inqom.png" 

describe(`after visiting ["www.welcometothejungle.com/fr/me/settings/account"] webpage, clicking on ["Se connecter"] button, filling ["Email", "Mot de passe"] inputs, clicking ["Se connecter"] button, filling ["Photo de profil"] input and clicking on ["OK"] button`, () => {

  before(() => {
    cy.visit('fr/me/settings/account')
    // ...
  })

  after(() => {
    // ...
    cy.get('.bZzTqu').click()
    cy.get('[data-testid="account-edit-button-submit"]').click()
    cy.reload()
  })

  it("_profile-avatar data are updated", () => {
    // ...
    cy.url().should('contains', 'www.welcometothejungle.com/fr/signin')
    
    cy.get('.sc-cVAmsi > [data-testid="login-field-email"]')
    .should('be.visible')
    .type(data.email)
 
    cy.get('[data-testid="login-field-password"]')
    .should('be.visible')
    .type(data.password)
    
    
    cy.get('[data-testid="login-button-submit"]')
    .should('be.visible')
    .click()
    
    cy.url().should('contains', 'www.welcometothejungle.com/fr/me/settings/account')
    
    cy.wait(2000)
    
    const filepath = 'img/inqom.png'
   
    cy.get('.dfcLOV')
    .attachFile(filepath, { subjectType: 'drag-n-drop' })

    cy.get('[data-testid="account-edit-button-submit"]').click()

    cy.get('.sc-gVkuDy').should('be.visible')

    cy.reload()

})
})
