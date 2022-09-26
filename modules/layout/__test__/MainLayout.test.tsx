import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MainLayout from "../MainLayout";


jest.mock("../nav/NavLink", () => () => {
  <div data-testid="navlink" />;
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

describe("Main Layout", () => {
  it("renders properly", () => {
    render(<MainLayout />);
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
  });

  it("has all necessary children", () => {
    render(<MainLayout />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("main-container")).toBeInTheDocument();
  });
});
