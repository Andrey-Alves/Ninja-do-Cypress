describe('Login', ()=> {
  it('Deve logar com sucesso', ()=> {
    cy.start()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')
  })

  it('Não deve logar com senha inválida', ()=> {
    cy.start()
    cy.submeterLogin('papito@webdojo.com', 'katana')

    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })

  it('Não deve logar com email errado', ()=> {
    cy.start()
    
    cy.submeterLogin('papito123@webdojo.com', 'katana123')

      cy.contains('Acesso negado! Tente novamente.').should('be.visible')
    })
})