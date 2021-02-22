/*
 * @Author: 唐云
 * @Date: 2021-02-17 22:55:33
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-22 22:17:39
 */
import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Spin } from 'antd'

import routes from '@/router'
import store from '@/store'

import TYHeader from '@/components/Header'
import TYFooter from '@/components/Footer'
import TYAppPlayBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <TYHeader />
        <Suspense
          fallback={
            <div className="example">
              <Spin size="large" tip="Loading..." />
            </div>
          }
        >
          {renderRoutes(routes)}
        </Suspense>
        <TYFooter />
        <TYAppPlayBar />
      </HashRouter>
    </Provider>
  )
})
