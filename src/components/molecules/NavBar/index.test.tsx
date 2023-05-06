import { render, fireEvent } from '@testing-library/react';
import Navbar from '.';

describe('Navbar component', () => {
  it('renders the logo and search bar correctly', () => {
    const { getByTestId } = render(<Navbar handleSearchResult={function (): {} {
      throw new Error('Function not implemented.');
    } } handleSearch={function (): void {
      throw new Error('Function not implemented.');
    } } searchImage={undefined} clearSearch={undefined} searchQuery={''} isButtonDisabled={false} />);
    const logoTextElement = getByTestId('molecule-logotext');
    const searchFieldElement = getByTestId('atom-searchbar');
    const searchButtonElement = getByTestId('atom-button');
    
    expect(logoTextElement).toBeInTheDocument();
    expect(searchFieldElement).toBeInTheDocument();
    expect(searchButtonElement).toBeInTheDocument();
  });
  
  it('calls handleSearchResult and handleSearch on button click', () => {
    const handleSearchResult = jest.fn();
    const handleSearch = jest.fn();
    const { getByTestId } = render(<Navbar handleSearchResult={handleSearchResult} handleSearch={handleSearch} searchImage={undefined} clearSearch={undefined} searchQuery={''} isButtonDisabled={false} />);
    const searchButtonElement = getByTestId('atom-button');
    
    fireEvent.click(searchButtonElement);
    
    expect(handleSearchResult).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
