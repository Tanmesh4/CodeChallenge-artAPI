import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonComponent from ".";

describe("ButtonComponent", () => {
  test("renders button with text", () => {
    const handleSearch = jest.fn();
    const { getByText } = render(
      <ButtonComponent handleSearch={handleSearch} isButtonDisabled={false}>
        Search
      </ButtonComponent>
    );
    const buttonElement = getByText("Search");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls handleSearch prop when button is clicked", () => {
    const handleSearch = jest.fn();
    const { getByTestId } = render(
      <ButtonComponent handleSearch={handleSearch} isButtonDisabled={false}>
        Search
      </ButtonComponent>
    );
    const buttonElement = getByTestId("button-atom");
    fireEvent.click(buttonElement);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  test("disables the button if isButtonDisabled prop is true", () => {
    const handleSearch = jest.fn();
    const { getByTestId } = render(
      <ButtonComponent handleSearch={handleSearch} isButtonDisabled={true}>
        Search
      </ButtonComponent>
    );
    const buttonElement = getByTestId("button-atom");
    expect(buttonElement).toBeDisabled();
  });
});