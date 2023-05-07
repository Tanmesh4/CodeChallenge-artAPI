import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import ArtWorkDetails from ".";

describe("ArtWorkDetails component", () => {
  let mock: MockAdapter;
  const objectNumber = "12345";
  const longTitle = "Test Artwork";
  const artist = "Test Artist";
  const objectType = "Test Object Type";
  const measurements = "10 x 10 cm";
  const description = "Test Description";
  const apiUrl = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=2esrTh6M`;
  const artObjectData = {
    objectNumber,
    longTitle,
    principalOrFirstMaker: artist,
    objectTypes: objectType,
    subTitle: measurements,
    plaqueDescriptionEnglish: description,
  };

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  test("renders the component with image and table content", async () => {
    mock.onGet(apiUrl).reply(200, { artObject: artObjectData });

    render(
      <MemoryRouter initialEntries={[`/artwork/${objectNumber}`]}>
        <Route path="/artwork/:objectNumber">
          <ArtWorkDetails />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      const imageCard = screen.getByTestId("image-card-detail");
      const tableBox = screen.getByTestId("tablebox-list");
      expect(imageCard).toBeInTheDocument();
      expect(tableBox).toBeInTheDocument();
    });
  });

  test("displays the artwork title", async () => {
    mock.onGet(apiUrl).reply(200, { artObject: artObjectData });

    render(
      <MemoryRouter initialEntries={[`/artwork/${objectNumber}`]}>
        <Route path="/artwork/:objectNumber">
          <ArtWorkDetails />
        </Route>
      </MemoryRouter>
    );

    const titleElement = await screen.findByText(longTitle);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the artwork artist", async () => {
    mock.onGet(apiUrl).reply(200, { artObject: artObjectData });

    render(
      <MemoryRouter initialEntries={[`/artwork/${objectNumber}`]}>
        <Route path="/artwork/:objectNumber">
          <ArtWorkDetails />
        </Route>
      </MemoryRouter>
    );

    const artistElement = await screen.findByText(artist);
    expect(artistElement).toBeInTheDocument();
  });

  test("displays the artwork object type", async () => {
    mock.onGet(apiUrl).reply(200, { artObject: artObjectData });

    render(
      <MemoryRouter initialEntries={[`/artwork/${objectNumber}`]}>
        <Route path="/artwork/:objectNumber">
          <ArtWorkDetails />
        </Route>
      </MemoryRouter>
    );

    const objectTypeElement = await screen.findByText(objectType);
    expect(objectTypeElement).toBeInTheDocument();
  });

  test("displays the artwork measurements", async () => {
    const mockData = {
      objectNumber: "SK-A-2525",
      longTitle: "The Milkmaid",
      principalOrFirstMaker: "Johannes Vermeer",
      objectTypes: ["painting"],
      subTitle: "h 45.5cm × w 41cm",
      plaqueDescriptionEnglish:
        "This is a painting of a woman pouring milk, done by the Dutch artist Johannes Vermeer in about 1660.",
    };
    // jest.spyOn(global, "fetch").mockResolvedValueOnce({
    //   json: async () => ({ artObject: mockData }),
    // });

    render(<ArtWorkDetails />);
    const measurements = await screen.findByText("h 45.5cm × w 41cm");
    expect(measurements).toBeInTheDocument();
  });
});