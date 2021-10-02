import React from 'react'
import Icon from '@cmp/site/Icon'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/menu'
import { menuResolver } from '@src/data/resolvers/data'
import { Link } from 'gatsby'

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
      <Link to='/'>
        <Icon type='andraLogo' />
      </Link>
      <div className='menu__links d-flex justify-content-end w-100'>
        {menu.links.map(x => (
          <div className='menu__links__button px-3 py-2 mx-lg-3 mx-1'>
            {x.type === 'page' ? (
              <Link activeClassName='menu__links__button--active' to={x.url}>
                {x.label}
              </Link>
            ) : (
              <a key={x.url} target='_blank' href={x.url}>
                {x.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
