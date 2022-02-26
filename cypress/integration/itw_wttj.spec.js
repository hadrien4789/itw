import data from "../fixtures/ids/data.json" 
import * as login from "../page-objects/wttj_login-page";
import * as user from "../page-objects/user_profil-page";

describe(`after visiting ["www.welcometothejungle.com/fr/me/settings/account"] webpage, clicking on ["Se connecter"] button, filling ["Email", "Mot de passe"] inputs, clicking ["Se connecter"] button, filling ["Photo de profil"] input and clicking on ["OK"] button`, () => {

  before(() => {
    cy.visit('fr/me/settings/account')

  })

  after(() => {
  //clean up
  //after performing the test case we delete the picture profil
  user.click_delete_profile_picture_button()
  user.click_save_button()
   
  })


  it("_profile-avatar data are updated", () => {
    
    // assert that we are on the log in page
    cy.url().should('contains', 'www.welcometothejungle.com/fr/signin')
    
    // log in
    login.type_email(data.email)
    login.type_pwd(data.password)
    login.click_login_button()
  
    // assert that we are logged and that the page is displayed
    cy.url().should('contains', 'www.welcometothejungle.com/fr/me/settings/account')
    user.check_my_information()

    //upload the profil picture and assert that the upload was successfull
    const filepath = 'img/inqom.png'
    user.upload_file(filepath)
    user.click_save_button()
    user.check_profile_status_confirmation_alert()

    //check that the profile picture is up to date with the api
    cy.request('GET', 'https://api.welcometothejungle.com/api/v1/users/me').then(
    (response) => {
   
    expect(response.body).property('user').property('avatar').to.have.property('small')
    expect(response.body).property('user').property('avatar').to.have.property('thumb')
      
  }
)

})
})

