describe('Aprendendo conceitos Cypress', () => {

  it('1 - Acessando a home da página Automation Exercice', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Automation');
    cy.get('h1'); // Acessando a tag
    cy.get('h1').contains('Automation');
    cy.get('.features_items'); // Verifica se a seção 'features items' existe na página inicial
    // ou
    cy.get('div.features_items'); // tag + classe
  });

  it('2 - Verificando items para compra', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('.features_items');
    cy.get('.features_items').children().first(); // acessa o primeiro elemento filho de um item
    cy.get('.features_items').children().last(); // acessa o último elemento filho de um item
    cy.get('.features_items').children().eq(2); // acessando o elemento específico de uma array pelo index

    cy.get('[data-product-id="2"]') // acessa pelo data-id
  })

})