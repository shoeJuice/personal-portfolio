import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../Navbar";

jest.mock("../NavLink", () => () => {
  <div data-testid="navlink"></div>;
});

jest.mock('next/router', () => ({
    useRouter() {
      return ({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null)
      });
    },
  }));

describe("Navbar", () => {
  it("renders properly", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders all links", () => {
    render(<Navbar />);
    expect(screen.getByTestId("navbar")).toHaveTextContent("Home");
    expect(screen.getByTestId("navbar")).toHaveTextContent("About");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Projects");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Resume");
    expect(screen.getByTestId("navbar")).toHaveTextContent("Contact");
  });


});
