/// <reference types="cypress" />

describe('Work with Locators', () => {
    beforeEach(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })



    it('Xpath',() => {
        cy.xpath('//input[contains(@onclick, \'Francisco\')] ')

    })


})