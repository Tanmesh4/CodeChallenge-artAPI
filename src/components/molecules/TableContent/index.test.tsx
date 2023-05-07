import { render, screen } from "@testing-library/react";
import TableContent from ".";

describe("TableContent", () => {
  const mockProps = {
    heading: "Heading",
    content: "Content",
  };

  it("renders the component with the provided props", () => {
    render(<TableContent isLast={false} {...mockProps} />);
    const headingElement = screen.getByText("Heading");
    const contentElement = screen.getByText("Content");

    expect(headingElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it("renders the component with correct data-testid", () => {
    render(<TableContent isLast={true} {...mockProps} />);
    const tableContentElement = screen.getByTestId("molecule-tableContent");

    expect(tableContentElement).toBeInTheDocument();
  });
});