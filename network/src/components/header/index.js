import React, { memo, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { headerLinks } from '../../common/local-data'

export default memo(function Header() {
  
  return (
    <div className="app-header">
      <div className="content  wrap-v1">
        <div className="left_wrapped">
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="left_title">
            {
              headerLinks.map(item => {
                return (
                  <NavLink key={item.title} to={item.link}>
                    {item.title}
                  </NavLink>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
})
