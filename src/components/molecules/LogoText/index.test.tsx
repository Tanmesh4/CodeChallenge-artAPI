import { render, screen } from "@testing-library/react";
import Logotext from "./index";
import theme from "../../../theme/theme";
import "jest-styled-components";

describe("Logotext", () => {
  it("should render logo and title", () => {
    render(<Logotext />);
    const logo = screen.getByRole("img");
    const title = screen.getByText(/Art API/i);

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should render with correct alt attribute for logo", () => {
    render(<Logotext />);
    const logo = screen.getByRole("img");

    expect(logo).toHaveAttribute("alt", "Logo");
  });
});