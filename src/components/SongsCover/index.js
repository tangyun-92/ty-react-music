/*
 * @Author: 唐云
 * @Date: 2021-02-20 21:29:59
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-20 22:05:45
 * 歌曲封面组件
 */
import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils.js'

export default memo(function SongsCover(props) {
  const { info } = props

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
