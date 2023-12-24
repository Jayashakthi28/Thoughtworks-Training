import React from "react";
import Box from "./Box";
import { mount } from "cypress/react18";
describe("<Box />", () => {
  it("renders X", () => {
    const box = mount(
      <Box
        col={0}
        row={0}
        currentPlayer={"X"}
        element={"X"}
        setBoard={() => {}}
        setPrevCol={() => {}}
        setPrevRow={() => {}}
        winner={null}
      />
    );
    cy.get("[data-cy=box]").should("have.text", "X");
  });
  it("renders O", () => {
    const box = mount(
      <Box
        col={2}
        row={0}
        currentPlayer={"X"}
        element={"O"}
        setBoard={() => {}}
        setPrevCol={() => {}}
        setPrevRow={() => {}}
        winner={null}
      />
    );
    cy.get("[data-cy=box]").should("have.text", "O");
  });
  it("renders -", () => {
    const box = mount(
      <Box
        col={0}
        row={0}
        currentPlayer={"X"}
        element={"-"}
        setBoard={() => {}}
        setPrevCol={() => {}}
        setPrevRow={() => {}}
        winner={null}
      />
    );
    cy.get("[data-cy=box]").should("have.text", "-");
  });
});
