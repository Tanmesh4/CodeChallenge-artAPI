import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import DetailsPage from ".";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("DetailsPage", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
  });

  test("displays the back button", () => {
    render(<DetailsPage />);
    const backButton = screen.getByRole("button", { name: "Back to list" });
    expect(backButton).toBeInTheDocument();
  });

  test("clicking the back button navigates to the home page", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    render(<DetailsPage />);
    const backButton = screen.getByRole("button", { name: "Back to list" });
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("displays the art details", async () => {
    render(<DetailsPage />);
    const artDetails = await screen.findByTestId("details-middleData");
    expect(artDetails).toBeInTheDocument();
  });
});