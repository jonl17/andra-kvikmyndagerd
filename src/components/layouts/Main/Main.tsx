import React from 'react'
import Menu from '@cmp/site/Menu'
import SEO from '@cmp/site/SEO'
import Footer from '@cmp/site/Footer'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main>
        <Menu />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
