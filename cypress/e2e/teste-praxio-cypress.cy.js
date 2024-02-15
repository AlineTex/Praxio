describe("primeiro teste aline",()=>{
   beforeEach(()=>{
    cy.visit("http://localhost:5173/")
   })
    it("preenchimento de dados",()=>{
        cy.get('#nome').type("Aline Tex")
        cy.get('#email').type("aline_2010@hotmail.com")
        cy.get('#telefone').type("11986427653")
        cy.get('[for="feminino"]').click()
        cy.get('#data_nascimento').type("1982-10-30")
              
    })
})