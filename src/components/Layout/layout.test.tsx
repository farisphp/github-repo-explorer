import { render, screen } from '@testing-library/react'

import Header from './Header'
import Footer from './Footer'
import Layout from './index'

describe('<Header />', () => {
  it('should render header', () => {
    const { container } = render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(header).toHaveClass('border-b')

    const heading = screen.getByRole('heading', {
      name: 'Github Repo Explorer',
      level: 2
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-lg')

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://github.com/farisphp')

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<Footer />', () => {
  it('should render footer', () => {
    const { container } = render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('bg-black')

    const footerText = screen.getByText(/Faris Perwira Haqi/i)
    expect(footerText).toBeInTheDocument()
    expect(footerText).toHaveClass('text-center')

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<Layout />', () => {
  it('should render layout with min-h-screen class', () => {
    const { container } = render(<Layout />)

    const footer = screen.getByRole('main')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveClass('min-h-screen')

    expect(container.firstChild).toMatchSnapshot()
  })
})
