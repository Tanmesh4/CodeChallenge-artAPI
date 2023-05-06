import { fireEvent, render } from '@testing-library/react';
import TextBackButton from '.';

describe('TextBackButton', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<TextBackButton handleBackToList={() => {}} />);
    expect(getByTestId('molecule-backbutton')).toBeInTheDocument();
  });

  test('calls the handleBackToList function when button is clicked', () => {
    const mockHandleBackToList = jest.fn();
    const { getByRole } = render(<TextBackButton handleBackToList={mockHandleBackToList} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockHandleBackToList).toHaveBeenCalled();
  });
});
