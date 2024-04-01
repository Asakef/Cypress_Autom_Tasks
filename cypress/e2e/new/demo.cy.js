
var el

describe('Automating Selenium Demo Site', () =>{
  
     before(()=>{
            

    cy.visit("https://demo.seleniumeasy.com/")


                cy.fixture("demoElements").then((sel)=>{ 
                    el=sel
        })
})


it ('user can view web pages', () => {
cy.get(el.siteImage).should("be.visible")            
})


it ('user can click on input form draw down button', () => {    
cy.get(el.inputFormdDropDownButton).click()       
})
   

it ('user can view simple form demo button and click on it', () => {    
 cy.get(el.simpleFormDemoButton).click()
})
        

it ('user type on the message field', () => {    

cy.get(el.messageField).type(el.message)

})
               
       
it ("user can click on show message button to view message", () => {  
 cy.get(el.showMessage).click()
})
           

it ("if user can input on value A field", () => {  
    cy.get(el.value1Field).scrollIntoView().fill(3)
   })
         
   it ("if user can input on value B field", () => {  

    cy.get(el.value2Field).scrollIntoView().fill(6)


})

   it ("User can  CLICK ON GET TOTAL buttond", () => {  
    cy.get(el.getTotalButton).click()
   })





})


