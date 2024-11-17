/// <reference types="cypress" />

const Perfil = require('../../fixtures/perfil.json')

describe('Funcionalidades: login', () => {
    beforeEach('Deve visitar o site', () => {
        cy.visit('');
        cy.login('petrucio1@petrucio.com.br', 'P123456#')
    });

    it('Deve realizar o login, usando a massa de dados', () => {
        cy.get('.icon-user-unfollow').click();
        cy.get('#username').type(Perfil.usuario);
        cy.get('#password').type(Perfil.senha);
        cy.get('.woocommerce-form > .button').click();
        
    });

    it.only('Deve realizar o login, usando a massa de dados (fixture)', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('.icon-user-unfollow').click();
            cy.get('#username').type(dados.usuario);
            cy.get('#password').type(dados.senha);
            cy.get('.woocommerce-form > .button').click();

        })


    it.only('Deve realizar o login, usando a massa de dados customizada', () => {
        
        cy.login('petrucio1@petrucio.com.br', 'P123456#')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
        
    });    
        
        
    });



});

