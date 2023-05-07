import { render, screen, fireEvent } from "@testing-library/react";
import SearchFieldComponent from ".";


describe("SearchFieldComponent", () => {
  const handleSearchResult = jest.fn();
  const clearSearch = jest.fn();

  test("should render input field", () => {
    render(
      <SearchFieldComponent
            handleSearchResult={handleSearchResult}
            clearSearch={clearSearch}
            searchQuery="" searchImage={""}      />
    );
    const inputField = screen.getByPlaceholderText(/Please type in your search/i);
    expect(inputField).toBeInTheDocument();
  });

  test("should have correct data-testid attribute value", () => {
    render(
      <SearchFieldComponent
            handleSearchResult={handleSearchResult}
            clearSearch={clearSearch}
            searchQuery="" searchImage={""}      />
    );
    const searchField = screen.getByTestId("searchfield-atom");
    expect(searchField).toBeInTheDocument();
  });

  test("should call handleSearchResult on input change", () => {
    render(
      <SearchFieldComponent
            handleSearchResult={handleSearchResult}
            clearSearch={clearSearch}
            searchQuery="" searchImage={''}      />
    );
    const inputField = screen.getByPlaceholderText(/Please type in your search/i);
    fireEvent.change(inputField, { target: { value: "test" } });
    expect(handleSearchResult).toHaveBeenCalled();
  });

  test("should call clearSearch on Image click", () => {
    render(
      <SearchFieldComponent
            handleSearchResult={handleSearchResult}
            clearSearch={clearSearch}
            searchQuery="" searchImage={''}      />
    );
    const image = screen.getByAltText("");
    fireEvent.click(image);
    expect(clearSearch).toHaveBeenCalled();
  });

  test("should display searchQuery prop value in input field", () => {
    render(
      <SearchFieldComponent
            handleSearchResult={handleSearchResult}
            clearSearch={clearSearch}
            searchQuery="test" searchImage={''}      />
    );
    const inputField = screen.getByPlaceholderText(/Please type in your search/i);
    expect(inputField).toHaveValue("test");
  });
});