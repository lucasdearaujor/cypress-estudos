/// <reference types="cypress" />

describe('Desafio validar mensagens cadastro', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Validar alert nome...', () => {
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Nome eh obrigatorio')
        })
    })

    it('Validar alert sobrenome', () => {
        cy.get('#formNome').type('Lucas')
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })
    })

    it('Validar alert sexo', () => {
        cy.get('#formNome').type('Lucas')
        cy.get('[data-cy=dataSobrenome]').type('Araujo Ribeiro')
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
    })

    it('Validar se foi cadastrado', () => {
        cy.get('#formNome').type('Lucas')
        cy.get('[data-cy=dataSobrenome]').type('Araujo Ribeiro')
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
        cy.get('#resultado > :nth-child(1)')
            .should('contain','Cadastrado')

    })




})