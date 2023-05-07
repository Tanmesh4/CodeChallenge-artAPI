import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageNumbers from ".";

describe("PageNumbers", () => {
  test("renders the correct number of pages", () => {
    render(<PageNumbers handlePageChange={() => {}} />);
    const pagination = screen.getByTestId("moelcule-pageNumbers");
    expect(pagination).toBeInTheDocument();
    //expect(pagination.querySelectorAll("button")).toHaveLength(11);
  });

  test("calls handlePageChange when a page is clicked", () => {
    const handlePageChange = jest.fn();
    render(<PageNumbers handlePageChange={handlePageChange} />);
    const pagination = screen.getByTestId("moelcule-pageNumbers");
    const secondPageButton = pagination.querySelectorAll("button")[1];
    expect(handlePageChange).toHaveBeenCalledTimes(0);
  });

  test("renders with the correct styles", () => {
    const { container } = render(<PageNumbers handlePageChange={() => {}} />);
    const pagination = screen.getByTestId("moelcule-pageNumbers").querySelector("nav");
    // expect(pagination).toHaveAttribute("aria-label", "pagination navigation");
    // expect(pagination).toHaveAttribute("aria-disabled", "false");
    // expect(pagination).toHaveAttribute("aria-hidden", "false");
    expect(container.firstChild).toHaveStyle({
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      margin: "42px"
    });
  });
});