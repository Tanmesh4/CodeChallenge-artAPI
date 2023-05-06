import { render, screen } from "@testing-library/react";
import FooterArtApi from ".";

describe("FooterArtApi", () => {
  it("should render without crashing", () => {
    render(<FooterArtApi />);
    expect(screen.getByTestId("molecule-FooterArtApi")).toBeInTheDocument();
  });

  it("should display the ArtAPI text", () => {
    render(<FooterArtApi />);
    expect(screen.getByText("ArtAPI")).toBeInTheDocument();
  });

  it("should have the correct background color", () => {
    render(<FooterArtApi />);
    expect(screen.getByTestId("molecule-FooterArtApi")).toHaveStyle({
      background: "#262626"
    });
  });

  it("should have the correct typography variant and color", () => {
    render(<FooterArtApi />);
    const typography = screen.getByText("ArtAPI");
    expect(typography).toHaveStyle({
      color: "#636366",
      fontSize: "1.25rem",
      fontWeight: 500
    });
    expect(typography.tagName).toBe("H6");
  });
});
