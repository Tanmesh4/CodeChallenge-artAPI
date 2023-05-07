import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextBackButton from '.';
import theme from '../../../theme/theme';
import BackButtonImage from '../../../images/Chevron-left.svg';

describe('TextBackButton', () => {
  it('renders the back button and text', () => {
    const handleBackToList = jest.fn();
    render(<TextBackButton handleBackToList={handleBackToList} />);
    const backButtonImage = screen.getByAltText('BackButton');
    const backButtonLabel = screen.getByText('Back to the List');
    expect(backButtonImage).toBeInTheDocument();
    expect(backButtonLabel).toBeInTheDocument();
  });

  it('calls the handleBackToList function when the button is clicked', () => {
    const handleBackToList = jest.fn();
    render(<TextBackButton handleBackToList={handleBackToList} />);
    const backButton = screen.getByRole('button');
    fireEvent.click(backButton);
    expect(handleBackToList).toHaveBeenCalledTimes(1);
  });

  it('applies the correct styles to the text', () => {
    const handleBackToList = jest.fn();
    render(<TextBackButton handleBackToList={handleBackToList} />);
    const backButtonLabel = screen.getByText('Back to the List');
    expect(backButtonLabel).toHaveStyle(`color: ${theme.palette.primary.main}`);
    expect(backButtonLabel).toHaveStyle('font-size: 1.5rem');
    expect(backButtonLabel).toHaveStyle('font-weight: 400');
  });

  it('applies the correct styles to the button', () => {
    const handleBackToList = jest.fn();
    render(<TextBackButton handleBackToList={handleBackToList} />);
    const backButton = screen.getByRole('button');
    expect(backButton).toHaveStyle('display: flex');
    expect(backButton).toHaveStyle('align-items: center');
    //expect(backButton).toHaveStyle(`background-color: ${theme.palette.background.default}`);
    expect(backButton).toHaveStyle('color: rgb(25, 118, 210)');
    expect(backButton).toHaveStyle('cursor: pointer');
    expect(backButton).toHaveStyle(`border-radius: ${theme.shape.borderRadius}px`);
  });

  it('applies the correct styles to the image', () => {
    const handleBackToList = jest.fn();
    render(<TextBackButton handleBackToList={handleBackToList} />);
    const backButtonImage = screen.getByAltText('BackButton');
    expect(backButtonImage).toHaveAttribute('src', BackButtonImage);
  });
});