import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AboutMe from "../pages/about";

describe("About Me Page", () => {
  it("loads properly", () => {
    render(<AboutMe />);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    expect(screen.getByTestId("self-portrait")).toBeInTheDocument();
  });
  it("has all necessary elements", () => {
    render(<AboutMe />);
    expect(screen.getByTestId("about-page")).toHaveTextContent("About Me");
    expect(screen.getByTestId("about-page")).toHaveTextContent("Remy Papillon");
  });
});
