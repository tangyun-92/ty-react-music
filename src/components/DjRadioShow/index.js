/*
 * @Author: 唐云
 * @Date: 2021-03-01 22:44:54
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-02 14:03:46
 * 主播电台推荐节目
 */
import React, { memo } from 'react'

import { Progress } from 'antd'

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
            <div key={item.rank} className="item">
              <div className="left">
                <i className="sprite_icon"></i>
                <img
                  src={getSizeImage(item.picUrl || item.program.coverUrl, 40)}
                  alt=""
                />
              </div>
              <div className="con">
                <span className="name text-nowrap link">
                  {item.name || item.program.name}
                </span>
                <span className="dec text-nowrap link">
                  {item.rcmdtext || item.program.radio.name}
                </span>
              </div>
              <div className="right">
                {!item.name ? (
                  <Progress
                    percent={item.score / info[0].score * 100}
                    showInfo={false}
                    status="normal"
                    strokeColor="#bcbcbc"
                  />
                ) : (
                  <button className="btn">{item.category}</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </DjRadioShowWrapper>
  )
})
