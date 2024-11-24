/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

<<<<<<< HEAD
<<<<<<< HEAD
var usuario = faker.internet.email();
var senha = faker.internet.password(); 
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228

describe('Funcionalidades: cadastro', () => {

    beforeEach('Deve visitar o site', () => {
<<<<<<< HEAD
<<<<<<< HEAD
        cy.Site();   
    });
    
    it('Deve criar o cadastro customizado', () => {
        //cy.Site();
        cy.Cadastro(usuario, senha);
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        
    });   
    
    it('cadastro criado com sucesso', () => {    
        //cy.Site(); 
        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(usuario + '1')
        cy.get('#reg_password').type(senha) 
        cy.get(':nth-child(4) > .button').click();   
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')       
    });
=======
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
        cy.visit('');

    });
    
    it('Deve criar o cadastro', () => {
       
        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('P123456#');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)')
            .should('exist');
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.person.firstName());
        cy.get('#account_last_name').type(faker.person.lastName());
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });   
    
    it('cadastro criado com sucesso', () => {
        var email =  faker.internet.email();
        var nome =  faker.person.firstName();
        var sobrenome =  faker.person.lastName();

       
        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type('P123456#');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)')
            .should('exist');
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobrenome);
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')     
    });


    it('Deve criar o cadastro', () => {
        
        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type('P123456#');
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)')
            .should('exist');
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.person.firstName());
        cy.get('#account_last_name').type(faker.person.lastName());
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });  
    
    it.only('Deve criar o cadastro customizado', () => {

        var usuario = faker.internet.email();
        var senha = '#petru1234';
        var nome =  faker.person.firstName();
        var sobrenome = faker.person.lastName();

        cy.pre_cadastro(usuario, senha, nome, sobrenome)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)')
            .should('exist');
       

    });  







<<<<<<< HEAD
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
});
