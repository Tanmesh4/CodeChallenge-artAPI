import { render, fireEvent } from "@testing-library/react";
import PageNumbers from ".";

describe("PageNumbers", () => {
  test("renders page numbers", () => {
    const mockHandlePageChange = jest.fn();
    const { getAllByRole } = render(
      <PageNumbers handlePageChange={mockHandlePageChange} />
    );
    const pageNumbers = getAllByRole("button");
    expect(pageNumbers.length).toBe(11);
  });

  test("calls handlePageChange when page number is clicked", () => {
    const mockHandlePageChange = jest.fn();
    const { getByText } = render(
      <PageNumbers handlePageChange={mockHandlePageChange} />
    );
    const pageNumber = getByText("3");
    fireEvent.click(pageNumber);
    expect(mockHandlePageChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 3 } })
    );
  });
});
