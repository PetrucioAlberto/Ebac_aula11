/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
<<<<<<< HEAD
<<<<<<< HEAD
import produtoPage from "../../support/PageObjects/produto.Page";
const Perfil = require('../../fixtures/perfil.json');
//const produtos = require('../../fixtures/produtos.json');

var usuario = Perfil.usuario;
var senha =   Perfil.senha;

describe('Funcionalidades: login', () => {
    beforeEach('Deve visitar o site', () => {
        produtoPage.VisitarURL();     
    })

    it('Deve realizar o login', () => {
        //produtoPage.VisitarURL(); 
        produtoPage.reliazarLogin(usuario, senha)
        produtoPage.mensagemValidacao('.woocommerce-MyAccount-content > :nth-child(2)','Olá, petrucio1')  
    });

    it('Deve selecionar o Produto', () => {
        //produtoPage.VisitarURL(); 
        produtoPage.reliazarLogin(usuario, senha)
        produtoPage.mensagemValidacao('.woocommerce-MyAccount-content > :nth-child(2)','Olá, petrucio1')
        produtoPage.selecionarProduto();
        produtoPage.mensagemValidacao('.post-2622 > .product-block > .caption > .meta > .infor > .name','Ajax Full-Zip Sweatshirt')
  
    });

    it('Deve buscar o Pruduto', () => {
        //produtoPage.VisitarURL(); 
        produtoPage.reliazarLogin(usuario, senha)
        produtoPage.mensagemValidacao('.woocommerce-MyAccount-content > :nth-child(2)','Olá, petrucio1')
        produtoPage.buscarPruduto('Apollo Running Short')
        
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 3;
        //produtoPage.VisitarURL(); 
        produtoPage.reliazarLogin(usuario, senha)
        produtoPage.mensagemValidacao('.woocommerce-MyAccount-content > :nth-child(2)','Olá, petrucio1')
        produtoPage.buscarPruduto('Ajax Full-Zip Sweatshirt')
        produtoPage.adicionarProdutoCarrinho('S','Blue', qtd);
        produtoPage.mensagemValidacao('.product_title','Ajax Full-Zip Sweatshirt')
    });

    it('Visitar pagina do produto', () => {

        produtoPage.VisitarURLdoproduto('ajax full zip sweatshirt');
        produtoPage.mensagemValidacao('.product_title','Ajax Full-Zip Sweatshirt')
        
    });

    it('Deve adicionar o produto ao carrinho usando  massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtoPage.reliazarLogin(usuario, senha)
            produtoPage.mensagemValidacao('.woocommerce-MyAccount-content > :nth-child(2)','Olá, petrucio1')
            produtoPage.buscarPruduto(dados[1].nome)
            produtoPage.adicionarProdutoCarrinho(dados[1].tamanho,dados[1].cor , dados[1].qtd);
       
        })
    })

    it('Deve adicionar o produto ao carrinho usando  massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtoPage.reliazarLogin(usuario, senha)
            produtoPage.mensagemValidacao('.woocommerce-MyAccount-content > :nth-child(2)','Olá, petrucio1')
            produtoPage.buscarPruduto(dados[1].nome)
            produtoPage.adicionarProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor , 
                dados[1].qtd);
            produtoPage.mensagemValidacao('.product_title', dados[1].nome)    
           
        });
=======
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228

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
<<<<<<< HEAD
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
    });
});




<<<<<<< HEAD
<<<<<<< HEAD
   
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228




<<<<<<< HEAD
<<<<<<< HEAD
  


=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
=======
>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
