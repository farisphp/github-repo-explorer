import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render with className bg-black', () => {
    const { container } = render(<Button>test</Button>)

    const button = screen.getByRole('button', { name: 'test' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-black')

    expect(container.firstChild).toMatchSnapshot()
  })
})
