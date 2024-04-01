


describe('Automating ifram', () =>{
  
     before(()=>{

            cy.visit('https://the-internet.herokuapp.com/iframe')

                cy.fixture("UploadElement").then( ()=>{ 
                    
        })
})

        it ('can write on iframe field', () => {
             cy.get("#mce_0_ifr").then(($iframe)=>{
             let iframebody=$iframe.contents().find("body")
             cy.wrap(iframebody).clear().type("Hello My Name is Oluwafunmike")
        })
    
        })


        it.skip ('can write on iframe field', () => {
            cy.get("#mce_0_ifr").type("Hello My Name is Oluwafunmike")
       })
   
    



})


