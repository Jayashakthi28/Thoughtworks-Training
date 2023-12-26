import React from "react";
import Category from "./Category";
import { mount } from "cypress/react18";
describe("<Category />", () => {
  it("renders", () => {
    mount(
      <Category
        categoryName={"test"}
        todos={[]}
        updateIsCompleted={() => {}}
        updateIsSelected={() => {}}
      />
    );
    cy.get("[data-cy=category-name]").should("contain.text", "test");
    const todoContainer = cy.get("[data-cy=container]");
    todoContainer.should("have.text", "Nothing to show");
  });
});
