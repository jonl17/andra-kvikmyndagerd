import React from 'react'
import Menu from '@cmp/site/Menu'
import SEO from '@cmp/site/SEO'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main>
        <Menu />
        {children}
      </main>
    </>
  )
}

export default MainLayout
