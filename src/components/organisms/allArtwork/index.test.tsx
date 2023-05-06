import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ArtworkGrid from ".";
import ImageCard from "../../molecules/ImageCard";
import PageNumbers from "../../molecules/PageNumbers";
import TableContent from "../../molecules/TableContent";
import TextBackButton from "../../molecules/TextBackButton";

describe("ArtworkGrid component", () => {
  const artData = [
    {
      id: 1,
      objectNumber: "12345",
      title: "The Starry Night",
      principalOrFirstMaker: "Vincent van Gogh",
    },
    {
      id: 2,
      objectNumber: "67890",
      title: "The Persistence of Memory",
      principalOrFirstMaker: "Salvador Dali",
    },
  ];

  it("renders a loading message when there is no art data", () => {
    render(<ArtworkGrid artData={[]} handlePageChange={() => {}} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the ImageCard component with correct data", () => {
    render(<ArtworkGrid artData={artData} handlePageChange={() => {}} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText("The Starry Night")).toBeInTheDocument();
    expect(screen.getByText("Vincent van Gogh")).toBeInTheDocument();
    expect(screen.getByText("The Persistence of Memory")).toBeInTheDocument();
    expect(screen.getByText("Salvador Dali")).toBeInTheDocument();
  });

  it("navigates to artwork details page when an image is clicked", () => {
    const navigate = jest.fn();
    render(<ArtworkGrid artData={artData} handlePageChange={() => {}} />, {
      wrapper: MemoryRouter,
    });

    userEvent.click(screen.getByAltText("The Starry Night"));

    expect(navigate).toHaveBeenCalledWith("/artwork/12345");
  });

  it("renders the PageNumbers component with correct props", () => {
    const handlePageChange = jest.fn();
    render(<PageNumbers handlePageChange={handlePageChange} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByTestId("moelcule-pageNumbers")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("11")).toBeInTheDocument();
  });
});

describe("ImageCard component", () => {
  const handleClick = jest.fn();

  it("renders with correct props", () => {
    render(
      <ImageCard
        rightTypo="Vincent van Gogh"
        leftTypo="The Starry Night"
        width={450}
        height={364}
        id="12345"
        imageClick={handleClick}
      />
    );

    expect(screen.getByText("Vincent van Gogh")).toBeInTheDocument();
    expect(screen.getByText("The Starry Night")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toHaveAttribute("src");
    expect(screen.getByTestId("image")).toHaveAttribute("alt");
    expect(handleClick).not.toHaveBeenCalled();
  });
});