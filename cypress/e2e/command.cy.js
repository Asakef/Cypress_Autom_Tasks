
var el

describe('creating custom login commands', () =>{
  
     before(()=>{                
                cy.fixture("command").then( (sel)=>{ 
                   el=sel
        })

        cy.visit("/")

        Cypress.on("unacaught:exception",()=>{ //addition exception to code to remove error
          return false
      })
     

})

       

it.skip('if user can login successfully', () => {

   //  cy.login()  //login 1el.

     cy.login2(el.username, el.password)

             
 })

 it('user can login using reusable functions', () => {
  
     cy.tyAssert("command",el.usernameField, el.username)
     cy.tyAssert("command",el.passwordField, el.password).fill
     cy.pressDown("command", el.loginButton)
               

   })






 


})
