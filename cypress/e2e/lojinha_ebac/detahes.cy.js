/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Funcionalidades: cadastro', () => {

    beforeEach('Deve visitar o site', () => {
        cy.visit('');
        cy.fixture('perfil').then(Login => {
            cy.login(Login.usuario, Login.senha)

        })


        cy.login('petrucio1@petrucio.com.br', 'P123456#');

    });

    it('Deve criar o cadastro customizado', () => {

        var usuario = faker.internet.email();
        var senha = faker.internet.password();
        var nome =  faker.person.firstName();
        var sobrenome = faker.person.lastName();

        cy.pre_cadastro(usuario, senha, nome, sobrenome)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)')
            .should('exist');
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')    
       
    });  

    it.only('Deve realizar o login, usando (fixture)', () => {

            cy.DetalhesConta('petrucio24', 'Alberto')
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')    
       
    
        })
    })
    