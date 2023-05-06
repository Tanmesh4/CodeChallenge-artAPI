import { render } from '@testing-library/react'
import BasicTemplate from '.'

describe('BasicTemplate', () => {
  const handleSearchResult = jest.fn()
  const handleSearch = jest.fn()
  const middleData = <div>Some content here</div>

  it('renders the Navbar, middleData, and FooterArtApi components', () => {
    const { getByTestId } = render(
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={middleData} searchImage={undefined}      />,
    )

    expect(getByTestId('navbar')).toBeInTheDocument()
    expect(getByTestId('middle-data')).toBeInTheDocument()
    expect(getByTestId('footer')).toBeInTheDocument()
  })

  it('passes the handleSearchResult and handleSearch props to the Navbar component', () => {
    const { getByTestId } = render(
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={middleData} searchImage={undefined}      />,
    )

    const navbar = getByTestId('navbar')
    expect(navbar).toHaveAttribute('handleSearchResult', handleSearchResult)
    expect(navbar).toHaveAttribute('handleSearch', handleSearch)
  })

  it('displays the middleData prop', () => {
    const { getByTestId } = render(
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={middleData} searchImage={undefined}      />,
    )

    const middleDataElement = getByTestId('middle-data')
    expect(middleDataElement).toContainHTML('<div>Some content here</div>')
  })

  it('displays the FooterArtApi component', () => {
    const { getByTestId } = render(
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={middleData} searchImage={undefined}      />,
    )

    const footerArtApi = getByTestId('footer')
    expect(footerArtApi).toBeInTheDocument()
  })
})