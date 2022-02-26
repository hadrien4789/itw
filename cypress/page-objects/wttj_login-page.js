export function type_email(email) {
    cy.get('.sc-cVAmsi > [data-testid="login-field-email"]')
    .should('be.visible')
    .type(email)
    }

export function type_pwd(pwd) {
    cy.get('.sc-cVAmsi > [data-testid="login-field-password"]')
    .should('be.visible')
    .type(pwd)
    }

export function click_login_button(pwd) {
    cy.get('[data-testid="login-button-submit"]')
    .should('be.visible')
    .click()
    }