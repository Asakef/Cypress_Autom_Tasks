
var el //this isused for declaring cy-fixture globalvariable

//below is used for cy.fixure ubternally
//import { selector } from "../fixtures/element" 

//const { beforeEach } = require("mocha")

//DESCRIPTION OF OUR TEST SUITE


describe('LOGIN SUCCESSFULLY', () => {
  
   //beforeEach(()=>{

    before(()=>{
      
    Cypress.on("unacaught:exception",()=>{ //addition exception to code to remove error
        return false
    })

    

  cy.visit('/')

  //for interna cy.fixture
  //cy.fixture("locators").then( (el)=>{  

  //for global cy.fixture
  cy.fixture("locators").then( (sel)=>{ 
    el=sel

  })
    
//  it('input valid credentials', () => {
//  cy.fixture("locators").then( (el)=>{
//cy.get(el.image).should('be.visible')
//cy.get(el.usernameField).type(el.username1)
// } )


    

    //cy.visit('https://www.saucedemo.com/v1/')

  //  cy.get('[data-test="username"]').type("Hello")

  //assert command  (should be visible) that image is visible on the site

  //cy.get('.bot_column').should("be.visible").wait(2000) 

  //page object modellin using export import
  //cy.get(selector.image).should("be.visible").wait(2000)

  //cy.get('[data-test="username"]').type("locked_out_user").wait(2000)

 // cy.get(selector.usernameField).type("locked_out_user").wait(2000).clear()
 //cy.get(selector.usernameField).type(selector.username1)


  //cy.wait(2000)  
//  cy.get('[data-test="username"]').type("standard_user").wait(2000)
  //cy.wait(2000)

      //Assertion ----to assert that username is correct as expected
     // cy.get('[data-test="username"]').should("have.value","standard_user")
      //cy.get('[data-test="password"]').type("secret_sauce").wait(2000)

      //assertion---using cy.wait for delaying when automating
      //cy.wait(2000)
      //cy.get('#login-button').click()
     //assertion ---cy.screenshot for taking screen shot of the automation process
      //cy.screenshot()
      //creating a custome screenshot name 



      //cy.screenshot("testify")

//  //it('input valid credentials', () => {   //for internal cy-fixure1
   // cy.fixture("locators").then( (el)=>{
   // cy.get(el.passwordField).type(el.password)
    //cy.get(el.loginButton).click()
    
//}) //closing for internal cy.fixture1
    
 
    
})

    //it.only ('login as a locked out user', () => {  ///to run a single block alone
   
      it ('login as a locked out user', () => {
      //cy.fixture("locators").then( (el)=>{   //for internal cy-fixure1
   // cy.get(el.usernameField).clear().type(el.username2)
   // cy.get(el.passwordField).clear().type(el.password)

    cy.get(el.usernameField).clear().fill(el.username2)  ///using cy(fill) command
    cy.get(el.passwordField).clear().fill(el.password)  ///using cy(fill) command
    //cy.get(el.loginButton).click()
    //cy.get(el.logOutButton).click()

    //cy.findByText("LOGIN").click

    cy.wait(2000)

//}) //closing for internal cy.fixture1

})



it('login as a problem user', () => {
 //cy.fixture("locators").then( (el)=>{   //for internal cy-fixure1
 //cy.get(el.usernameField).clear().type(el.username3)
 //cy.get(el.passwordField).clear().type(el.password)

 cy.get(el.usernameField).clear().fill(el.username3)    //using cy(fill) command
 cy.get(el.passwordField).clear().fill(el.password)   //using cy(fill) command
 //cy.findByText("LOGIN").click

 //cy.get(el.loginButton).click()
 //cy.get(el.logOutButton).click()

 cy.wait(2000)
//}) //closing for internal cy.fixture1




})
      it('login as a performance_glitch_user', () => {
   // cy.fixture("locators").then( (el)=>{    //for internal cy-fixure1
  // cy.get(el.usernameField).clear().type(el.username4) 
  //cy.get(el.passwordField).clear().type(el.password)


      cy.get(el.usernameField).clear().fill(el.username4)   //using cy(fill) command
      cy.get(el.passwordField).clear().fill(el.password)    //using cy(fill) command
   //   cy.findByText("LOGIN").click
    //  cy.get(el.loginButton).click()
   //   cy.get(el.logOutButton).click()

      cy.wait(2000)

//}) //closing for internal cy.fixture1



})
     it('login as a standard user', () => {
   //   cy.fixture("locators").then( (el)=>{    /////for internal cy-fixure1
     // cy.get(el.usernameField).clear().type(el.username1)
     // cy.get(el.passwordField).clear().type(el.password)

    cy.get(el.usernameField).clear().fill(el.username1)  //using cy(fill) command
    cy.get(el.passwordField).clear().fill(el.password)   //using cy(fill) command      
    cy.get(el.loginButton).click()
    //cy.get(el.logOutButton).click()

   // cy.findByText("LOGIN").click

      cy.wait(2000)

//}) //closing for internal cy.fixture1


})
        
    // cy.visit('https://www.saucedemo.com/v1/')
     // cy.get('.bot_column').should("be.visible").wait(2000)
     // cy.get('[data-test="username"]').type("standard_user").wait(2000)
     
    //page object modellin using export import

     // cy.get('[data-test="username"]').should("have.value","standard_user")
    //  cy.get(selector.passwordfield).type("secret_sauce").wait(2000)
     
     //page object modellin using export import
      //cy.get('#login-button').click()
      //cy.get(selector.loginButton).click()
     
     // cy.screenshot("testify")

})



