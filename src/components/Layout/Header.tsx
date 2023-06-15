import Container from 'components/Container'
import { FaGithub } from 'react-icons/fa'

function Header() {
  return (
    <header className="w-full border-b py-6 shadow-sm">
      <Container className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Github Repo Explorer</h2>
        <a href="https://github.com/farisphp">
          <FaGithub className="h-6 w-6" />
        </a>
      </Container>
    </header>
  )
}

export default Header
