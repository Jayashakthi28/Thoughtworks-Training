import React from "react";
import SubHeader from "./SubHeader";
import { mount } from "cypress/react18";
describe("<SubHeader />", () => {
  it("renders", () => {
    mount(<SubHeader />);
    cy.get("[data-cy=sub-header]").children().should("have.length", 5);
  });
});
