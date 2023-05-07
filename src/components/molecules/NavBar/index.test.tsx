import { render, fireEvent } from "@testing-library/react";
import Navbar from ".";

describe("Navbar", () => {
  const handleSearchResult = jest.fn();
  const handleSearch = jest.fn();
  const searchImage = jest.fn();
  const clearSearch = jest.fn();
  const searchQuery = "";
  const isButtonDisabled = false;

  it("renders logo and search bar", () => {
    const { getByTestId } = render(
      <Navbar
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        searchImage={searchImage}
        clearSearch={clearSearch}
        searchQuery={searchQuery}
        isButtonDisabled={isButtonDisabled}
      />
    );
    expect(getByTestId("molecule-navbar")).toBeInTheDocument();
    expect(getByTestId("molecule-logotext")).toBeInTheDocument();
    expect(getByTestId("searchfield-atom")).toBeInTheDocument();
    expect(getByTestId("button-atom")).toBeInTheDocument();
  });

  it("calls handleSearch on search button click", () => {
    const { getByTestId } = render(
      <Navbar
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        searchImage={searchImage}
        clearSearch={clearSearch}
        searchQuery={searchQuery}
        isButtonDisabled={isButtonDisabled}
      />
    );
    const searchButton = getByTestId("button-atom");
    fireEvent.click(searchButton);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});