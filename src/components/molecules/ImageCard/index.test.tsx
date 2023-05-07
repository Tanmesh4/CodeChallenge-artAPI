import { fireEvent, render } from "@testing-library/react";
import ImageCard from "./index";

describe("ImageCard component", () => {
  const props = {
    leftTypo: "Left Text",
    rightTypo: "Right Text",
    width: 200,
    height: 200,
    id: "1",
    imageClick: jest.fn(),
  };

  it("should render with props", () => {
    const { getByTestId } = render(<ImageCard {...props} />);
    const imageCardElement = getByTestId("molecule-imageCard");

    expect(imageCardElement).toBeInTheDocument();
  });

  it("should have a right typography box with the right text", () => {
    const { getByTestId } = render(<ImageCard {...props} />);
    const rightTypoBox = getByTestId("right-typo-box");

    expect(rightTypoBox).toHaveTextContent("Right Text");
  });

  it("should have a left bottom typography box with the left text", () => {
    const { getByTestId } = render(<ImageCard {...props} />);
    const leftBottomTypoBox = getByTestId("left-bottom-typo-box");

    expect(leftBottomTypoBox).toHaveTextContent("Left Text");
  });

  it("should trigger imageClick when the image is clicked", () => {
    const { getByTestId } = render(<ImageCard {...props} />);
    const imageCardElement = getByTestId("molecule-imageCard");

    fireEvent.click(imageCardElement);

    expect(props.imageClick).toHaveBeenCalled();
  });

  it("should have a border and lower opacity on hover", () => {
    const { getByTestId } = render(<ImageCard {...props} />);
    const imageCardElement = getByTestId("molecule-imageCard");

    fireEvent.mouseEnter(imageCardElement);

    expect(imageCardElement).toHaveStyle("border: 1px solid #E0E0E0");
    expect(imageCardElement).toHaveStyle("opacity: 0.7");
  });
});