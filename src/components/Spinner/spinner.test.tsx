import { render } from '@testing-library/react'

import Spinner from '.'

describe('<Spinner />', () => {
  it('should render svg with className animate-spin', () => {
    const { container } = render(<Spinner />)

    const spinners = container.getElementsByClassName('animate-spin')
    expect(spinners[0]).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
