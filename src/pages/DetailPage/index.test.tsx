import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DetailsPage from ".";

describe("DetailsPage", () => {
  it("should render the TextBackButton component", () => {
    render(<DetailsPage />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("textBackButton")).toBeInTheDocument();
  });

  it("should render the ArtWorkDetails component", () => {
    render(<DetailsPage />, { wrapper: MemoryRouter });
    expect(screen.getByTestId("allArtworkDetais")).toBeInTheDocument();
  });

  it("should navigate back to the homepage when the handleBackToList function is called", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));
    render(<DetailsPage />, { wrapper: MemoryRouter });
    screen.getByTestId("textBackButton").click();
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});