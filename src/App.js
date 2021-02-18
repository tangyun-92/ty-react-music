/*
 * @Author: 唐云
 * @Date: 2021-02-17 22:55:33
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-18 15:56:41
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from '@/router'

import TYHeader from '@/components/Header'
import TYFooter from '@/components/Footer'

export default memo(function App() {
  return (
    <HashRouter>
      <TYHeader></TYHeader>
      {renderRoutes(routes)}
      <TYFooter></TYFooter>
    </HashRouter>
  )
})
