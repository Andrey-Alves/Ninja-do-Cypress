describe('Formulario de Consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submeterLogin('papito@webdojo.com', 'katana123')

        cy.goTo('Formulário', 'Consultoria')

        cy.get('#name').type("Andrey Alves")
        cy.get('#email').type("andreyalves@gmail.com")
        cy.get('#phone') //localizador pelo placeholder 'input[placeholder="texto"]'
            .type("88921441918") 
            .should('have.value', '(88) 92144-1918')
    })
})
