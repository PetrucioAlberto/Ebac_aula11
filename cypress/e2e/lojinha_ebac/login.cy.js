/// <reference types="cypress" />

describe('Funcionalidades: login', () => {
    beforeEach('Deve realizar o login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/?');
        cy.get('.icon-user-unfollow').click();
        cy.get('#username').type('petrucio1@petrucio.com.br');
        cy.get('#password').type('P123456#');
        cy.get('.woocommerce-form > .button').click();
    });
});

