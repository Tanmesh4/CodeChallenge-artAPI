import { render, fireEvent } from "@testing-library/react";
import Navbar from ".";

describe("Navbar", () => {
  const handleSearchResult = jest.fn();
  const handleSearch = jest.fn();
  const isButtonDisabled = false;
  const options = ["drawings"];

  it("renders logo and search bar", () => {
    const { getByTestId } = render(
      <Navbar
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        isButtonDisabled={isButtonDisabled}
        options={options} handleOptionSelected={undefined}      />
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
        isButtonDisabled={isButtonDisabled}
        options={options} handleOptionSelected={undefined}      />
    );
    const searchButton = getByTestId("button-atom");
    fireEvent.click(searchButton);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
