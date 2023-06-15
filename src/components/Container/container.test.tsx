import { render } from '@testing-library/react'

import Container from '.'

describe('<Container />', () => {
  it('should render with className bg-black', () => {
    const { container } = render(<Container>test</Container>)
    const wrapper = container.getElementsByClassName('max-w-5xl')

    expect(wrapper[0]).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
