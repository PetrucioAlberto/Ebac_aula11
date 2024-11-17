/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidades: Produto', () => {

    beforeEach(() => {
        
        var email = faker.internet.email();

        cy.visit('');
        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(email);
        cy.get('#reg_password').type('P123456#');
        cy.get(':nth-child(4) > .button').click();
    });

    it('Deve acessar o site, realizar o cadastro e navegar até um produto', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.get('.product-block').contains('Arcadio Gym Short').click();
        cy.screenshot();
    });
});








