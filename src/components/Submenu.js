import React, {  useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
      onMouseLeave={()=>closeSubmenu()}
    >
      <section>
        <div className={`submenu-inner `}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <Link key={index} to={url} className="mx-2 subLinks">
                {icon}
                {label}
              </Link>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
