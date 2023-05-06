import { render } from '@testing-library/react';
import Logotext from '.';
import Logo from '../../../images/Vector.svg';


test('renders Logotext component without crashing', () => {
  render(<Logotext />);
});

test('renders logo and text in Logotext component', () => {
    const { getByAltText, getByText } = render(<Logotext />);
    const logo = getByAltText('Logo');
    const text = getByText('Art API');
    expect(logo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('renders correct image in Logotext component', () => {
    const { getByAltText } = render(<Logotext />);
    const logo = getByAltText('Logo');
    expect(logo).toContain(Logo);
  })