/*
 * @Author: 唐云
 * @Date: 2021-03-01 22:44:54
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 22:58:00
 * 主播电台title组件
 */
import React, { memo } from 'react'

import { DjRadioTitleWrapper } from './style'

export default memo(function DjRadioTitle(props) {
  const { title, url } = props

  return <DjRadioTitleWrapper>
    <div className="title-left">{title}</div>
    <a href={url} className="title-right">更多 &gt;</a>
  </DjRadioTitleWrapper>
})
