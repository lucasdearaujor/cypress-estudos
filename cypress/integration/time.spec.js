/// <reference types="cypress" />

describe('', () => {
    beforeEach(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    it('Going back to the past', () => {
     //   cy.get('#buttonNow').click()
     //   cy.get('#resultado > span').should('contain','20/03/2021')

     //   cy.clock()
     //   cy.get('#buttonNow').click()
      //  cy.get('#resultado > span').should('contain','31/12/1969')

        const dt = new Date(2012, 3, 10, 15, 23, 50) // meses começam no zero
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain','10/04/2012')
    })

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain','1616')
        cy.get('#resultado > span').invoke('text').should('gt',1616239077922) //gt - great then

        //resetar tempo
        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte',0)
     //   cy.wait(1000)
      //  cy.get('#buttonTimePassed').click()
      //  cy.get('#resultado > span').invoke('text').should('lte',1000)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte',1000)

        cy.tick(15000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte',1000)

    })
})