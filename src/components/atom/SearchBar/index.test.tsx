import { render, screen, fireEvent } from "@testing-library/react";
import SearchFieldComponent from ".";

describe("SearchFieldComponent", () => {
  it("renders the component without crashing", () => {
    render(<SearchFieldComponent handleSearchResult={function (): void {
      throw new Error("Function not implemented.");
    } } searchImage={undefined} clearSearch={undefined} searchQuery={""} />);
    expect(screen.getByTestId("searchfield-atom")).toBeInTheDocument();
  });

  it("renders the TextField component with the correct placeholder text", () => {
    render(<SearchFieldComponent handleSearchResult={function (): void {
      throw new Error("Function not implemented.");
    } } searchImage={undefined} clearSearch={undefined} searchQuery={""} />);
    expect(screen.getByPlaceholderText("Please type in your search")).toBeInTheDocument();
  });

  it("calls the handleSearchResult prop function on text input change", () => {
    const handleSearchResult = jest.fn();
    render(<SearchFieldComponent handleSearchResult={handleSearchResult} searchImage={undefined} clearSearch={undefined} searchQuery={""} />);
    const input = screen.getByPlaceholderText("Please type in your search");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleSearchResult).toHaveBeenCalledTimes(1);
  });

  it("renders the component with the correct style properties applied", () => {
    render(<SearchFieldComponent handleSearchResult={function (): void {
      throw new Error("Function not implemented.");
    } } searchImage={undefined} clearSearch={undefined} searchQuery={""} />);
    const box = screen.getByTestId("searchfield-atom");
    expect(box).toHaveStyleRule("padding", "8px 24px");
    expect(box).toHaveStyleRule("width", "460px");
    expect(box).toHaveStyleRule("border", "1px solid rgba(255, 255, 255, 0.15)");
    expect(box).toHaveStyleRule("border-radius", "80px");
  });

//   it("renders the component with the correct dimensions", () => {
//     render(<SearchFieldComponent handleSearchResult={function (): void {
//         throw new Error("Function not implemented.");
//     } } />);
//     const box = screen.getByTestId("searchfield-atom");
//     expect(box).toHaveStyleRule("height", "48px");
//   });

//   it("ensures that the TextField is a full width element", () => {
//     render(<SearchFieldComponent />);
//     const textField = screen.getByTestId("standard-textfield");
//     expect(textField).toHaveStyleRule("width", "100%");
//   });

//   it("passes additional props correctly to the TextField component", () => {
//     const handleSearchResult = jest.fn();
//     render(
//       <SearchFieldComponent
//         handleSearchResult={handleSearchResult}
//         id="test-id"
//         label="test-label"
//       />
//     );
//     const textField = screen.getByTestId("standard-textfield");
//     expect(textField).toHaveAttribute("id", "test-id");
//     expect(textField).toHaveAttribute("label", "test-label");
//   });

//   it("tests that the component is accessible by running an accessibility test", async () => {
//     const { container } = render(<SearchFieldComponent />);
//     const results = await axe(container);
//     expect(results).toHaveNoViolations();
//   });
});