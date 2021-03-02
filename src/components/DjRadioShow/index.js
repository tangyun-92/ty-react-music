/*
 * @Author: 唐云
 * @Date: 2021-03-01 22:44:54
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-02 10:47:39
 * 主播电台推荐节目
 */
import React, { memo } from 'react'

import { DjRadioShowWrapper } from './style'
import DjRadioTitle from '@/components/DjRadioTitle'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function DjRadioShow(props) {
  /**
   * state and props
   */
  const { title, url, info = [] } = props

  return (
    <DjRadioShowWrapper>
      <DjRadioTitle title={title} url={url} />
      <div className="list">
        {info.map((item, index) => {
          return (
            <div key={item.id} className="item">
              <div className="left">
                <i className="sprite_icon"></i>
                <img src={getSizeImage(item.picUrl, 40)} alt="" />
              </div>
              <div className="con">
                <span className="name text-nowrap link">{item.name}</span>
                <span className="dec text-nowrap link">{item.rcmdtext}</span>
              </div>
              <div className="right">
                <button className="btn">{item.category}</button>
              </div>
            </div>
          )
        })}
      </div>
    </DjRadioShowWrapper>
  )
})
