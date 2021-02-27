/*
 * @Author: 唐云
 * @Date: 2021-02-20 21:29:59
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 14:19:02
 * 歌曲封面组件
 */
import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils.js'
import {
  getPlayListDetailToPlayListAction,
  changePlayListAction,
} from '@/store/player/actionCreators'
import { useDispatch } from 'react-redux'

export default memo(function SongsCover(props) {
  const { info } = props

  const dispatch = useDispatch()

  /**
   * other handles
   */
  const playMusic = (id) => {
    dispatch(changePlayListAction([]))
    dispatch(getPlayListDetailToPlayListAction(id))
  }

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
            <i className="sprite_icon play" onClick={(e) => playMusic(info.id)}></i>
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
