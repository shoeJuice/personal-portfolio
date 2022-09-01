import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../Navbar";



describe("Navbar", () => {
  it("renders properly", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders all links", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toHaveTextContent("Home");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Projects");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Contact");
  });


});
