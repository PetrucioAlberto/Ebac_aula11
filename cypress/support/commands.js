<<<<<<< HEAD
 // usado no Login
 
 Cypress.Commands.add('Site', () => {
   cy.visit('')    
 });

 Cypress.Commands.add('realizarLogin', () => {

   cy.get('.icon-user-unfollow').click();
   cy.fixture('perfil').then(dados => {
   cy.get('#username').type(dados.usuario)
   cy.get('#password').type(dados.senha)
   cy.get('.woocommerce-form > .button').click();
  
 });
});

 // usado no Cadastro

 Cypress.Commands.add('Cadastro', (usuario, senha) => {
   cy.get('.icon-user-unfollow').click();
   cy.get('#reg_email').type(usuario)
   cy.get('#reg_password').type(senha) 
   cy.get(':nth-child(4) > .button').click();  
 });

 
 // usado em Detalhes

 Cypress.Commands.add('DetalhesCadastro', (usuario, senha, nome, sobrenome) => {
   cy.get('.icon-user-unfollow').click();
   cy.get('#reg_email').type(usuario)
   cy.get('#reg_password').type(senha) 
   cy.get(':nth-child(4) > .button').click();  
   cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
   cy.get('#account_first_name').type(nome);
   cy.get('#account_last_name').type(sobrenome);
   cy.get('.woocommerce-Button').click();
 });


=======

Cypress.Commands.add('login', (usuario, senha) => { 

    cy.get('.icon-user-unfollow').click();
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha);
    cy.get('.woocommerce-form > .button').click();

 })

 Cypress.Commands.add('pre_cadastro', (usuario, senha, nome, sobrenome) => {

        cy.get('.icon-user-unfollow').click();
        cy.get('#reg_email').type(usuario);
        cy.get('#reg_password').type(senha);
        cy.get(':nth-child(4) > .button').click();
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobrenome);
        cy.get('.woocommerce-Button').click();
 })

 Cypress.Commands.add('Detalhes', (usuario, senha, nome, sobrenome) => {

    cy.get('.icon-user-unfollow').click();
    cy.get('#reg_email').type(usuario);
    cy.get('#reg_password').type(senha);
    cy.get(':nth-child(4) > .button').click();
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobrenome);
    cy.get('.woocommerce-Button').click();
})

Cypress.Commands.add('DetalhesConta', (nome, sobrenome) => {

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nome);
    cy.get('#account_last_name').type(sobrenome);
    cy.get('.woocommerce-Button').click();
       
});

>>>>>>> 71f9760d3bc4b86d6f32d6a6149f7c43e121a228
