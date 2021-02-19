/*
 * @Author: 唐云 
 * @Date: 2021-02-19 15:22:59 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-02-19 15:22:59 
 * 发现音乐
 */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper, TopMenu } from './style'
import { discoverMenu } from '@/common/local-data.js'

export default memo(function TYDiscover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
