import { mount } from "cypress/react18";
describe("Check Winning condition for X", () => {
  it("passes", () => {
    const website = cy.visit("http://localhost:5173");
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=00]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=10]").click(); //O
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=01]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=11]").click(); //O
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=02]").click(); //X
    website
      .get("[data-cy=result]")
      .should("have.text", "Game Over : Winner is X");
  });
});
describe("Check Winning condition for O", () => {
  it("passes", () => {
    const website = cy.visit("http://localhost:5173");
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=10]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=00]").click(); //O
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=11]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=01]").click(); //O
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=20]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=02]").click(); //O
    website
      .get("[data-cy=result]")
      .should("have.text", "Game Over : Winner is O");
  });
});
describe("Check Double click on Same box", () => {
  it("passes", () => {
    const website = cy.visit("http://localhost:5173");
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=00]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=00]").click(); //O
  });
});
describe("Check Reset Game", () => {
  it("passes", () => {
    const website = cy.visit("http://localhost:5173");
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-box=00]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is O");
    website.get("[data-box=01]").click(); //O
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
    website.get("[data-cy=reset]").click(); //X
    website.get("[data-cy=result]").should("have.text", "Current Player is X");
  });
});
