describe('create App spec', () => {
  before(() => {
    cy.visit('/');
  });

  it('successfully click on pokémon of the list and show details', () => {
    cy.get('nav.pokemon-list ul > li:nth-child(2) > button')
      .click()
      .invoke('text')
      .then((text) => {
        cy.get('h1').contains(text).should('exist');
      });
  });

  it('successfully click on "Siguiente" button and navigate to next page', () => {
    cy.get('nav.pokemon-list > .simple-card__footer > button')
      .contains(/siguiente/i)
      .click();
  });

  it('click on another pokémon and show details', () => {
    cy.get('nav.pokemon-list ul > li:nth-child(2) > button')
      .click()
      .invoke('text')
      .then((text) => {
        cy.get('h1').contains(text).should('exist');
      });
  });

  it('successfully click on "Anterior" button and navigate to previous page', () => {
    cy.get('nav.pokemon-list > .simple-card__footer > button')
      .contains(/anterior/i)
      .click();
  });

  it('"Anterior" button should be disabled', () => {
    cy.get('nav.pokemon-list > .simple-card__footer > button')
      .contains(/anterior/i)
      .should('be.disabled');
  });
});
