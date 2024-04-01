
//var el

describe('Automating New Tab', () =>{
  
     before(()=>{

     Cypress.on("unacaught:exception",()=>{ //addition exception to code to remove error
            return false
        })
   
        
    cy.visit('https://the-internet.herokuapp.com/windows')

               // cy.fixture("UploadElement").then( (sel)=>{ 
                 //    el=sel
        //})
})

     it ('this will open a new tab', () => {
            cy.get(".example > a").click()
             
       })
    
    
   it ('this will not open a new tab', () => {
      cy.get(".example > a").invoke("removeAttr", "target").click
         
  })   


})


