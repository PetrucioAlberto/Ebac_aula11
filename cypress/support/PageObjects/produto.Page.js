class produtoPage{

    VisitarURL(){
        cy.visit('') 
    }

    reliazarLogin(usuario,senha){

        cy.get('.icon-user-unfollow').click();
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click();
        
    }

    mensagemValidacao(campo, texto){
        cy.get(campo).should('contain', texto)
        
    }
    
   selecionarProduto(){
    cy.get('#primary-menu > .menu-item-629 > a').click();
    cy.get('.product').eq(2)
        
    };

    buscarPruduto(nomeproduto){
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group').type(nomeproduto)
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    
    }

    adicionarProdutoCarrinho(tamanho,cor,qtd){
        cy.get('.button-variable-item-'+ tamanho).click();
        cy.get('.button-variable-item-' + cor).click();
        cy.get('.input-text').clear().type(qtd);
        cy.get('.single_add_to_cart_button').click();
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
        cy.screenshot();
        

    }

    VisitarURLdoproduto(nomeProduto) {
        const produtoFormatado = nomeProduto.replace(/ /g, '-');
        cy.visit(`/product/${produtoFormatado}`); 
    }

    
    


}
export default new produtoPage();