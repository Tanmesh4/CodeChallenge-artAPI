import { render, screen, fireEvent } from "@testing-library/react";
import ImageComp from ".";

describe("ImageComp", () => {
  const testSrc = "testSrc";
  const testAlt = "testAlt";

  test("renders an image with src and alt attributes", () => {
    render(<ImageComp src={testSrc} alt={testAlt} />);

    const imageElement = screen.getByAltText(testAlt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", testSrc);
  });

  test("calls onClick prop when the image is clicked", () => {
    const onClickMock = jest.fn();
    render(<ImageComp src={testSrc} alt={testAlt} onClick={onClickMock} />);

    const imageElement = screen.getByAltText(testAlt);
    fireEvent.click(imageElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});