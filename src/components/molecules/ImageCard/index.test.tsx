import { render, screen, fireEvent } from "@testing-library/react";
import ImageCard from ".";

describe("ImageCard component", () => {
  const handleImageClick = jest.fn();

  beforeEach(() => {
    handleImageClick.mockClear();
  });

  test("renders ImageCard component with left and right typography and an image", () => {
    render(
      <ImageCard
        leftTypo="Sample left typography"
        rightTypo="Sample right typography"
        width={100}
        height={100}
        id="1234"
        imageClick={handleImageClick}
      />
    );

    const leftTypoElement = screen.getByText("Sample left typography");
    const rightTypoElement = screen.getByText("Sample right typography");
    const imageElement = screen.getByAltText("image-1234");

    expect(leftTypoElement).toBeInTheDocument();
    expect(rightTypoElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test("calls imageClick function when image is clicked", () => {
    render(
      <ImageCard
        leftTypo="Sample left typography"
        rightTypo="Sample right typography"
        width={100}
        height={100}
        id="1234"
        imageClick={handleImageClick}
      />
    );

    const imageElement = screen.getByAltText("image-1234");

    fireEvent.click(imageElement);

    expect(handleImageClick).toHaveBeenCalledTimes(1);
  });
});