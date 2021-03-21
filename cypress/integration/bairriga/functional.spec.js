/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should test at a function level', () => {
    before(() => {
        cy.login('lucasdearaujor@gmail.com','123')
        cy.resetApp()
    })
    
    beforeEach(() => {
        cy.get(loc.MENU.HOME).click()
        cy.resetApp()
        cy.wait(2000)
    })

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste - INSERIR')
        cy.get(loc.MESSAGE).should('contain','Conta inserida')
    })

    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.wait(1000)
        cy.get(loc.CONTAS.NOME).clear()
        cy.get(loc.CONTAS.NOME).type('Conta para alterar - ALTERADA')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','sucesso')
    })

    it('Should not creat an account with same name', () => {
        cy.acessarMenuConta()
        cy.wait(2000)
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.MESSAGE).should('contain','400')

    })

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Lucas')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para saldo')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','sucesso')
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7  )
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc','123'),{timeout: 5000}).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para extrato')).should('contain','220,00')
        
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value','Movimentacao 1, calculo saldo')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain','sucesso')

        
    })

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao'))
            .click()
        cy.get(loc.MESSAGE).should('contain','sucesso')
        
    })

})