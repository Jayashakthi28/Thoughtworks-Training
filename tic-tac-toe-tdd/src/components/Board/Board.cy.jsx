import React from "react";
import Board from "./Board";
import { INITBOARD } from "../../utits/constants";
import { mount } from "cypress/react18";

describe("<Board />", () => {
  it("renders", () => {
    mount(
      <Board
        board={INITBOARD}
        currentPlayer={"X"}
        setBoard={() => {}}
        setCurrentPlayer={() => {}}
        setPrevCol={() => {}}
        setPrevRow={() => {}}
        setWinner={() => {}}
        winner={null}
      />
    );
    const board = cy.get("[data-cy=board]");
    board.children().should("have.length", 9);
    
  });
});
