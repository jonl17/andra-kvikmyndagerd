import React from 'react'
import Icon from '@cmp/site/Icon'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/menu'
import { menuResolver } from '@src/data/resolvers/data'

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      prismicMenu(tags: { in: "MAIN_MENU" }) {
        ...menuFragment
      }
    }
  `)

  const menu = menuResolver(data.prismicMenu)
  console.log(menu)

  return (
    <div className='menu px-4 w-100'>
      <Icon type='andraLogo' />
      <div className='menu__links d-flex justify-content-end w-100'>
        {menu.links.map(x => (
          <div className='menu__links__button px-3 py-2 mx-lg-3 mx-1'>
            <a key={x.url} target='_blank' href={x.url}>
              {x.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
