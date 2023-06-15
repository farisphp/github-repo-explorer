import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {/* <div className="h-full flex-1"></div> */}
      {children}
      <Footer />
    </main>
  )
}

export default Layout
