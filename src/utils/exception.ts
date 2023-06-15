import { RequestError } from '@octokit/request-error'

export type ErrorException = {
  status: number
  message: string
}

export function exception(error: unknown): ErrorException {
  let status = 500
  let message = 'Oops, something went wrong. Please try again later.'

  if (error instanceof RequestError) {
    status = error.status
    message = error.message
  } else if (error instanceof Error) {
    message = error.message
  } else if (typeof error === 'string') {
    message = error
  }

  return { status, message }
}
