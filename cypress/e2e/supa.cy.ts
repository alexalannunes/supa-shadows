/// <reference types="cypress" />

describe("supa shadows", () => {
  it("toggle shadow item", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="accordion-item-0"]').click();
    cy.get('[data-testid="accordion-item-0"]').should(
      "have.attr",
      "aria-expanded",
      "false"
    );
  });
});
