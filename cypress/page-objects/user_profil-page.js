export function check_my_information() {
    //assert that the 'Mes inforamtions' section is displayed
    cy.get(':nth-child(1) > .sc-1ejeabr-18').should('be.visible')
    }

export function upload_file(file) {
    cy.get('#avatar > input[type=file]')
    .attachFile(file)
    }

export function click_save_button() {
    cy.get('[data-testid="account-edit-button-submit"]')
    .should('be.visible')
    .click()
    }
    
export function click_delete_profile_picture_button() {
    cy.get('.bZzTqu')
    .should('be.visible')
    .click()  
    }

export function check_profile_picture_drang_d_drop_status(state) {
    cy.get('.dfcLOV')
    .should(state)
    }
    
export function check_profile_status_confirmation_alert() {
    cy.get('.sc-gVkuDy').should('be.visible')
    }
