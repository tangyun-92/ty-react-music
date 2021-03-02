/*
 * @Author: 唐云
 * @Date: 2021-03-02 14:52:08
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-02 15:11:39
 * 主播电台-列表组件
 */
import React, { memo } from 'react'

import { DjRadioListWrapper } from './style'
import DjRadioTitle from '@/components/DjRadioTitle'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function DjRadioList(props) {
  const { title, url, info = [] } = props

  return (
    <DjRadioListWrapper>
      <DjRadioTitle title={title} url={url} />
      <div className="list">
        {info.slice(0, 4).map((item, index) => {
          return (
            <div className="item">
              <div className="left">
                <img src={getSizeImage(item.picUrl, 120)} alt="" />
              </div>
              <div className="right">
                <span className="name link text-nowrap">{item.name}</span>
                <div className="dec text-nowrap">{item.rcmdtext}</div>
              </div>
            </div>
          )
        })}
      </div>
    </DjRadioListWrapper>
  )
})
