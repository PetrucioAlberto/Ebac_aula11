/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

<<<<<<< HEAD
const Perfil = require('../../fixtures/perfil.json')

var usuario = faker.internet.email();
var senha = faker.internet.password();
var nome = faker.person.firstName();
var sobrenome = faker.person.lastName();

//describe('Funcionalidades: detalhes', () => {
    beforeEach('Deve visitar o site', () => {
        cy.Site();
           
    });

    
it('Deve criar o cadastro customizado', () => {
    //cy.Site();
    cy.DetalhesCadastro(usuario, senha, nome, sobrenome);
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });  




=======
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
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
    