import { render, screen, fireEvent } from "@testing-library/react";
import SearchFieldComponent from ".";

describe("SearchFieldComponent", () => {
  const handleSearchResult = jest.fn();
  const clearSearch = jest.fn();
  const options = ["options"];

  test("should render input field", () => {
    render(
      <SearchFieldComponent
        handleSearchResult={handleSearchResult}
        options={options} handleOptionSelected={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    );
    const inputField = screen.getByPlaceholderText(
      /Please type in your search/i
    );
    expect(inputField).toBeInTheDocument();
  });

  test("should have correct data-testid attribute value", () => {
    render(
      <SearchFieldComponent
        handleSearchResult={handleSearchResult}
        options={options} handleOptionSelected={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    );
    const searchField = screen.getByTestId("searchfield-atom");
    expect(searchField).toBeInTheDocument();
  });

  test("should call handleSearchResult on input change", () => {
    render(
      <SearchFieldComponent
        handleSearchResult={handleSearchResult}
        options={options} handleOptionSelected={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    );
    const inputField = screen.getByPlaceholderText(
      /Please type in your search/i
    );
    fireEvent.change(inputField, { target: { value: "test" } });
    expect(handleSearchResult).toHaveBeenCalled();
  });

});