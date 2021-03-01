/*
 * @Author: 唐云
 * @Date: 2021-02-20 21:29:59
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 16:37:34
 * 歌曲封面组件
 */
import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils.js'
import {
  getPlayListDetailToPlayListAction,
  changePlayListAction,
} from '@/pages/player/store/actionCreators'
import { useDispatch } from 'react-redux'

export default memo(function SongsCover(props) {
  /**
   * state and props
   */
  const { info, right, bottom = '20px' } = props

  /**
   * redux hooks
   */
  const dispatch = useDispatch()

  /**
   * other methods
   */
  const playMusic = (id) => {
    dispatch(changePlayListAction([]))
    dispatch(getPlayListDetailToPlayListAction(id))
  }

  return (
    <SongsCoverWrapper right={right} bottom={bottom}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
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
