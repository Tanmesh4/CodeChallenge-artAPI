import React from 'react';
import { render } from '@testing-library/react';
import ImageCardDetail from '.';

describe('ImageCardDetail component', () => {
  const mockProps = {
    objectNumber: 'SK-C-5',
    longTitle: 'The Night Watch',
  };

  test('should render with correct image and text', () => {
    const { getByTestId } = render(<ImageCardDetail {...mockProps} />);
    const imageElement = getByTestId('image-constructor');
    let textElement = getByTestId('molecule-CardDetail').querySelector('h1');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toEqual(
      `https://www.rijksmuseum.nl/api/nl/collection/${mockProps.objectNumber}/tiles?format=jpg&quality=90&width=1408`
    );
    expect(textElement).toBeInTheDocument();
    textElement ? expect(textElement.textContent).toEqual(mockProps.longTitle) : '';
  });

  test('should render with correct styles', () => {
    const { getByTestId } = render(<ImageCardDetail {...mockProps} />);
    const rootElement = getByTestId('molecule-CardDetail');
    expect(rootElement).toHaveStyle({
      position: 'absolute',
      left: '0px',
      right: '0px',
      borderRadius: '8px',
    });
    const imageElement = rootElement.querySelector('img');
    expect(imageElement).toHaveStyle({
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
    });
    const textElement = rootElement.querySelector('h1');
    expect(textElement).toHaveStyle({
      position: 'absolute',
      top: '758px',
      color: 'white',
    });
  });
});