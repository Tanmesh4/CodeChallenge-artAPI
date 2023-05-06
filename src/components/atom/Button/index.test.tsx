import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from '.';

describe('ButtonComponent', () => {
  it('renders a button with text and fires a callback when clicked', () => {
    const mockHandleSearch = jest.fn();
    const buttonText = 'Click me';
    render(<ButtonComponent handleSearch={mockHandleSearch} isButtonDisabled={false}>{buttonText}</ButtonComponent>);
    const buttonElement = screen.getByTestId('button-atom');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
    fireEvent.click(buttonElement);
    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
