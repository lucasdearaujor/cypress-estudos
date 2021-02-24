/// <reference types="cypress" />

describe('Esperas...', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar o elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funcinou!!!')

    })
})