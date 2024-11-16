/// <reference types="cypress" />

import { faker } from '@faker-js/faker';


describe('Funcionalidades: cadastro', () => {
    it('Deve criar o cadastro', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/?');
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
    
    it.only('cadastro criado com sucesso', () => {
        var email =  faker.internet.email();
        var nome =  faker.person.firstName();
        var sobrenome =  faker.person.lastName();

        cy.visit('http://lojaebac.ebaconline.art.br/?');
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

});
