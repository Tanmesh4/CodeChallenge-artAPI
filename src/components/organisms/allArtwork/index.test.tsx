import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import ArtworkGrid from ".";

describe("ArtworkGrid component", () => {
  const mockArtData = [
    {
      id: 1,
      objectNumber: "1",
      title: "Title 1",
      principalOrFirstMaker: "Maker 1",
    },
    {
      id: 2,
      objectNumber: "2",
      title: "Title 2",
      principalOrFirstMaker: "Maker 2",
    },
  ];

  it("should render loading component when artData is empty", () => {
    render(<ArtworkGrid artData={[]} handlePageChange={() => {}} />);
    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render art cards when artData is not empty", () => {
    render(<ArtworkGrid artData={mockArtData} handlePageChange={() => {}} />);
    const innerGridElements = screen.getAllByTestId("innerGrid");
    expect(innerGridElements.length).toBe(mockArtData.length);
    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(screen.getByText("Maker 1")).toBeInTheDocument();
    expect(screen.getByText("Maker 2")).toBeInTheDocument();
  });

  it("should navigate to correct artwork page when clicking on image card", () => {
    const handlePageChange = jest.fn();
    render(
      <MemoryRouter>
        <ArtworkGrid artData={mockArtData} handlePageChange={handlePageChange} />
        <Route path="/artwork/:id">
          <div data-testid="artwork-page"></div>
        </Route>
      </MemoryRouter>
    );
    const imageCardElements = screen.getAllByTestId("image-card");
    userEvent.click(imageCardElements[0]);
    expect(screen.getByTestId("artwork-page")).toBeInTheDocument();
    expect(screen.getByTestId("artwork-page")).toHaveTextContent("Artwork details for 1");
  });

  it("should call handlePageChange when page number is clicked", () => {
    const handlePageChange = jest.fn();
    render(<ArtworkGrid artData={mockArtData} handlePageChange={handlePageChange} />);
    const pageNumberElement = screen.getByTestId("moelcule-pageNumbers");
    userEvent.click(pageNumberElement);
    expect(handlePageChange).toHaveBeenCalled();
  });
});