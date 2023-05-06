import { render, screen, fireEvent } from '@testing-library/react';
import ImageComp, { ImageProps } from '.';
import CardImage from '../../../images/Vector.svg';

describe('ImageComp', () => {
  const mockOnClick = jest.fn();
  const imageProps: ImageProps = {
    src: {CardImage},
    alt: 'Example Image',
    onClick: mockOnClick,
  };

  it('renders an image with the correct props', () => {
    render(<ImageComp {...imageProps} />);
    const imageElement = screen.getByAltText(imageProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imageProps.src);
  });

  it('calls the onClick function when the image is clicked', () => {
    render(<ImageComp {...imageProps} />);
    const imageElement = screen.getByAltText(imageProps.alt);
    fireEvent.click(imageElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});