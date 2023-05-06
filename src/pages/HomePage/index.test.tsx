import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../../components/molecules/NavBar";
import ArtWorkDetails from "../../components/organisms/ArtWorkDetials";
import HomePage from ".";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import SearchImage from '../../images/Search.svg'
import CloseImage from '../../images/close.svg'

describe("NavBar", () => {
  test("renders Navbar component", () => {
    const handleSearchResult = jest.fn();
    const handleSearch = jest.fn();
    render(
      <Navbar handleSearchResult={handleSearchResult} handleSearch={handleSearch} searchImage={undefined} clearSearch={undefined} searchQuery={undefined} isButtonDisabled={undefined} />
    );
    const searchInput = screen.getByPlaceholderText(/Search.../i);
    userEvent.type(searchInput, "test");
    expect(handleSearchResult).toHaveBeenCalledTimes(4);
    userEvent.click(screen.getByRole("button"));
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});

describe("ArtWorkDetails", () => {
    test("renders ArtWorkDetails component", () => {
      const { getByText, getByRole } = render(<ArtWorkDetails />);
      expect(getByText(/Details/i)).toBeInTheDocument();
      expect(getByRole("img")).toBeInTheDocument();
      expect(getByText(/Artist/i)).toBeInTheDocument();
    });
  });

  describe("HomePage", () => {
    let mock: MockAdapter;
    beforeEach(() => {
      mock = new MockAdapter(axios);
      mock
        .onGet("https://www.rijksmuseum.nl/api/en/collection", {
          params: {
            key: "2esrTh6M",
            involvedMaker: "Rembrandt van Rijn",
            p: 1,
            ps: 9,
          },
        })
        .reply(200, {
          artObjects: [
            {
              id: "test-id-1",
              title: "Test Artwork 1",
              principalOrFirstMaker: "Test Artist 1",
              webImage: { url: "http://test-image-1.jpg" },
            },
            {
              id: "test-id-2",
              title: "Test Artwork 2",
              principalOrFirstMaker: "Test Artist 2",
              webImage: { url: "http://test-image-2.jpg" },
            },
            {
              id: "test-id-3",
              title: "Test Artwork 3",
              principalOrFirstMaker: "Test Artist 3",
              webImage: { url: "http://test-image-3.jpg" },
            },
          ],
        });
    });
  
    afterEach(() => {
      mock.restore();
    });
  
    test("renders HomePage component", async () => {
      render(<HomePage />);
      const searchInput = screen.getByPlaceholderText(/Search.../i);
      expect(searchInput).toBeInTheDocument();
      expect(screen.getByText(/All artwork/i)).toBeInTheDocument();
      expect(await screen.findByText(/Test Artwork 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Artist 1/i)).toBeInTheDocument();
    });
  });