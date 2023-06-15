import { render, screen } from '@testing-library/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.'

describe('<Accordion />', () => {
  it('should render accordion correctly', () => {
    const { container } = render(
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const heading = screen.getByRole('heading', {
      name: 'Is it accessible?',
      level: 3
    })
    expect(heading).toBeInTheDocument()

    const accordionTrigger = screen.getByRole('button', {
      name: 'Is it accessible?'
    })
    expect(accordionTrigger).toBeInTheDocument()
    expect(accordionTrigger).toHaveAttribute('aria-expanded', 'false')

    expect(container.firstChild).toMatchSnapshot()
  })
})
