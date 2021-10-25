describe('Testando a existencia de 3 paginas no tab', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visitar a primeira pagina do projeto', () => {
    cy.contains('Tab 1 page');
  });
  it('Visitar a segunda pagina do projeto', () => {
    cy.visit('/tabs/tab2');
    cy.contains('Tab 2 page');
  });

  it('Visitar a primeira pagina do projeto', () => {
    cy.visit('/tabs/tab3');
    cy.contains('Tab 3 page');
  });
});
