import React from "react";
import Game from "./Game";
import { mount } from "cypress/react18";
describe("<Game />", () => {
  it("renders", () => {
    const game = mount(<Game />);
    game.get("[data-cy = game]").children().should("have.length", 2);
    game.get("[data-cy=header]").children().should("have.length", 2);
  });
});
