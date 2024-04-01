
var el

describe('Upload Dcoumnet', () =>{
  
     before(()=>{

            cy.visit('https://the-internet.herokuapp.com/upload')

                cy.fixture("UploadElement").then( (sel)=>{ 
                     el=sel
        })
})

        it ('user can upload document', () => {
             //   cy.get(el.chooseFileButton).attachFile("testify.png") ///uplaod method

                cy.xpath("/html/body/div[2]/div/div[1]/form/input[1]") ///uplaod method
                cy.get(el.uploadButton).click()

        })




})


