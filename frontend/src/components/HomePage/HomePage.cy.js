import React from "react";
import HomePage from "./HomePage";

describe("<HomePage />", () => {
  it("renders", () => {
    cy.mount(<HomePage />);
  });

  it("has a logo", () => {
    cy.mount(<HomePage />);
    cy.get(".app-logo").should("have.class", "app-logo");
  });
});
