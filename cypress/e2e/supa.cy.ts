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

  it("toggle active shadow 1", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="switch-active"]').click();
    cy.get('[data-testid="switch-active"] > input').should("not.be.checked");
  });

  it("toggle inset shadow 1", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="switch-inset"]').click();
    cy.get('[data-testid="switch-inset"] > input').should("be.checked");
  });

  it("add new shadow", () => {
    cy.visit("http://localhost:3000/");
    cy.get('button[title="add new shadow"]').click();
    cy.get('[data-testid="accordion-item-1"]').should(
      "have.attr",
      "aria-expanded",
      "true"
    );
  });

  it("remove shadow", () => {
    cy.visit("http://localhost:3000/");
    cy.get('button[title="add new shadow"]').click();

    cy.wait(1000);
    cy.get('[aria-label="Remove shadow"]').eq(1).click();
    cy.get('[aria-label="Remove shadow"]').eq(1).should("not.exist");
  });
});
