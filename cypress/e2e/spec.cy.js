describe('Aprendendo conceitos Cypress', () => {

  it('1 - Acessando a home da página Automation Exercice', () => {
    cy.visit('/');
    cy.contains('Automation');
    cy.get('h1'); // Acessando a tag
    cy.get('h1').contains('Automation');
    cy.get('.features_items'); // Verifica se a seção 'features items' existe na página inicial
    // ou
    cy.get('div.features_items'); // tag + classe
  });

  it('2 - Verificando items para compra', () => {
    cy.visit('/');
    cy.get('.features_items');
    cy.get('.features_items').children().first(); // acessa o primeiro elemento filho de um item
    cy.get('.features_items').children().last(); // acessa o último elemento filho de um item
    cy.get('.features_items').children().eq(2); // acessando o elemento específico de uma array pelo index

    cy.get('[data-product-id="2"]') // acessa pelo data-id
  });

  it('3 - Usuário faz login com username e senha inválidos', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.contains('Login to your account');
    cy.get('[data-qa="login-email"]').type('teste@email.com');
    //cy.get('.login-form').find('input[name="email"]'); // da certo
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Your email or password is incorrect!');
  });

  it('4 - Colocar item no carrinho e continuar comprando', () => {
    cy.visit('/');
    cy.get('[data-product-id="2"]').contains('Add to cart').click();
    cy.get('#cartModal').contains('Added');
    cy.get('button.close-modal', {timeout: 5000}).click();
  });

  it('5 - Acessando página de produtos - usando intercept', () => {
    cy.visit('/');
    cy.intercept('GET', 'products');
    cy.get('.navbar-nav').contains('Products').click();
    //cy.get('a[href^="/products"]').contains('Products').click();
  });

  it('6 - GET Produtos - usando request', () => {
    cy.request('GET', 'api/productsList');
  });
})