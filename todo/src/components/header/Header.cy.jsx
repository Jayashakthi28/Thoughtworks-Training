import React from "react";
import Header from "./Header";
import { mount } from "cypress/react18";

describe("<Header />", () => {
  it("renders", () => {
    mount(
      <Header
        addTodo={() => {}}
        clearAllTodo={() => {}}
        clearSelectedTodo={() => {}}
      />
    );
    cy.get("[data-cy=header]").children().should("have.length", 5);
  });
});
