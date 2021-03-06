/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Shold visit a page and asser title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
       // const title = cy.title()
       // console.log(title)

       // o titulo deve ser igual a
        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain','Campo').debug()

        cy.title()
            .should('be.equal','Campo de Treinamento')
            //.should('contain','Campo').pause()
        cy.title().debug()

        
        let syncTitle

        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
           cy.wrap($el).type(syncTitle)
        })


        //TODO escrever o log em um campo de texto
    })


    it('Shold find and interact with an element', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
//        cy.get('#buttonSimple').click()    
//        const botao = cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')

    })

})