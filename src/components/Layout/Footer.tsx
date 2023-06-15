import React from 'react'
import Container from 'components/Container'

function Footer() {
  const now = new Date()
  return (
    <footer className="bg-black py-7 text-white">
      <Container className="text-center">
        Copyright &copy; {now.getFullYear()}, Faris Perwira Haqi. All Rights
        Reserved
      </Container>
    </footer>
  )
}

export default Footer
