import { mount } from "cypress/react18";
describe("Test todo functionalities", () => {
  it("visit the page", () => {
    cy.visit("http://127.0.0.1:5173/");
  });
  it("adds new todo", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get("[data-cy=enterNewTodo]").type("test todo{enter}");
    cy.get("[data-cy=task]").should("have.text", "test todo");
  });
  it("mark a todo complete", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get("[data-cy=enterNewTodo]").type("test todo{enter}");
    cy.get("[data-cy=task]").should("have.text", "test todo");
    cy.get("[data-cy=isCompleted]").click();
    cy.get("[data-cy=isCompleted]").check();
    cy.get("[data-cy=task]").should("have.class", "line-through");
  });
  it("delete a todo", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get("[data-cy=enterNewTodo]").type("test todo{enter}");
    cy.get("[data-cy=enterNewTodo]").type("test todo new{enter}");
    cy.get("[data-cy=isSelected]").first().click();
    cy.get("[data-cy=isSelected]").first().check();
    cy.get("[data-cy=clearSelected]").click();
    cy.get("[data-cy=task]").should("have.length", 1);
  });
  it("delete all todos", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get("[data-cy=enterNewTodo]").type("test todo{enter}");
    cy.get("[data-cy=enterNewTodo]").type("test todo new{enter}");
    cy.get("[data-cy=clearAll]").click();
    cy.get("[data-cy=task]").should("have.length", 0);
  });
});
