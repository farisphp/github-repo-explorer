import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'components/Accordion'
import ResultItem from './ResultItem'
import { RestEndpointMethodTypes } from '@octokit/rest'

function ResultAccordion({
  result
}: {
  result: RestEndpointMethodTypes['search']['users']['response'] | undefined
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {result?.data?.items
        ? result?.data?.items?.map((item, idx) => {
            return (
              <AccordionItem key={`github-users-${idx}`} value={item.login}>
                <AccordionTrigger>
                  <div className="flex items-center">
                    {item.login}{' '}
                    <img
                      src={item.avatar_url}
                      className="ml-1 h-6 w-6"
                      alt=""
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ResultItem username={item.login} />
                </AccordionContent>
              </AccordionItem>
            )
          })
        : null}
    </Accordion>
  )
}

export default ResultAccordion
