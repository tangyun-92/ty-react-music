/*
 * @Author: 唐云 
 * @Date: 2021-02-24 21:44:04 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-24 23:07:54
 * 热门主播
 */
import React, { memo } from 'react'

import { HotAnchorWrapper } from './style'

export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <div className="content">
        <div className="anchor-top">
          <span>热门主播</span>
        </div>
      </div>
    </HotAnchorWrapper>
  )
})
