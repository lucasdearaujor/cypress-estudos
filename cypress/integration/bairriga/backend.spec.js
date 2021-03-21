/// <reference types="cypress" />

describe('Should test at a function level', () => {
    before(() => {
       
    })
    
    beforeEach(() => {

    })

    it('Should create an account', () => {
       cy.request({
           method: 'POST',
           url: 'https://barrigarest.wcaquino.me/signin',
           body: {
                email: "lucasdearaujor@gmail.com",
                redirecionar: false,
                senha: "123"
            }
       }).its('body.token').should('not.be.empty')
        .then(token => {
            cy.request({
                method: 'POST',
                url: 'https://barrigarest.wcaquino.me/contas',
                headers: {Authorization: `JWT ${token}`},
                body: { 
                     nome: 'Conta via rest'
                }
            }).as('response')
        })

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome','Conta via rest')
        })
        
    })

    it('Should update an account', () => {
       
    })

    it('Should not creat an account with same name', () => {
      
    })

    it('Should create a transaction', () => {
      
    })

    it('Should get balance', () => {
        
    })

    it('Should remove a transaction', () => {
        
    })

})