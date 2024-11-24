/// <reference types="cypress" />

const Perfil = require('../../fixtures/perfil.json')

describe('Funcionalidades: login', () => {
    beforeEach('Deve visitar o site', () => {
<<<<<<< HEAD
<<<<<<< HEAD
        cy.Site();   
    });

    it('Deve realizar o login, usando a massa de dados', () => {
        //cy.Site(); 
        cy.get('.icon-user-unfollow').click();
        cy.get('#username').type(Perfil.usuario)
        cy.get('#password').type(Perfil.senha)
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, petrucio1')
        
        
    });

    it('Deve realizar o login, usando a massa de dados (fixture)', () => {
        //cy.Site(); 
        cy.get('.icon-user-unfollow').click();
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, petrucio1')
        } )
 
    });

    it('Deve realizar o login, usando a massa de dados customizada', () => {
        //cy.Site(); 
        cy.realizarLogin();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, petrucio1')
        } )
   
    });    
        
        
   




=======
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
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
<<<<<<< HEAD
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228

