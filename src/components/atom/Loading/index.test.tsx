import { render, screen } from "@testing-library/react";
import Loading from ".";

describe("Loading component", () => {
  it("should render a CircularProgress", () => {
    render(<Loading />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render 'Loading...' text", () => {
    render(<Loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should have a data-testid attribute set to 'loading'", () => {
    render(<Loading />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});