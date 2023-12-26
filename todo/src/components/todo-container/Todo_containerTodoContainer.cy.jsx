import React from "react";
import TodoContainer from "./Todo_container";
import { mount } from "cypress/react18";
describe("<TodoContainer />", () => {
  it("renders", () => {
    mount(
      <TodoContainer
        taskName={"hi"}
        isCompleted={true}
        isSelected={false}
        id={5}
        dueDate={null}
        updateIsCompleted={() => {}}
        updateIsSelected={() => {}}
      />
    );
    cy.get("[data-cy=task]").should("have.text", "hi");
    cy.get("[data-cy=isSelected]").not().check();
    cy.get("[data-cy=isCompleted]").check();
  });
});
