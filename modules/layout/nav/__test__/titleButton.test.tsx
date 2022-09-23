import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { motion } from "framer-motion";

import TitleButton from "../TitleButton";

describe("titleButton", () => {
  it("renders properly", () => {
    render(<TitleButton name="Remy Papillon" />);
    expect(screen.getByTestId("title-button")).toBeInTheDocument();
    expect(screen.getByTestId("title-button")).toHaveTextContent(
      "Remy Papillon"
    );
  });
});
