/*
 * @Author: 唐云
 * @Date: 2021-02-26 23:17:10
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 16:21:00
 * 排行榜右侧介绍组件
 */
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { ListDetailWrapper } from './style'
import { getTopDetailAction } from '@/store/discover/top-list/actionCreators'
import { getSizeImage, formatDate } from '@/utils/format-utils'
import { changePlayListAction, getPlayListDetailToPlayListAction } from '@/store/player/actionCreators'

export default memo(function ListDetail() {
  /**
   * state and props
   */
  const { topDetail } = useSelector(
    (state) => ({
      topDetail: state.getIn(['topList', 'topDetail']),
    }),
    shallowEqual
  )

  /**
   * redux hooks
   */
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getTopDetailAction(19723756))
  }, [dispatch])

  // 播放
  const playMusic = (id) => {
    dispatch(changePlayListAction([]))
    dispatch(getPlayListDetailToPlayListAction(id))
  }

  // 添加
  const addMusic = (id) => {
    dispatch(getPlayListDetailToPlayListAction(id, 'add'))
  }

  return (
    <ListDetailWrapper>
      <div className="detail-left">
        <img src={getSizeImage(topDetail.coverImgUrl, 150)} alt="" />
      </div>
      <div className="detail-right">
        <div className="name">{topDetail.name}</div>
        <div className="time">
          <i className="icon sprite_icon2"></i>
          最近更新：{formatDate(topDetail.updateTime, 'MM月dd日')}
        </div>
        <div className="opera">
          <div
            className="btn play sprite_button"
            onClick={(e) => playMusic(topDetail.id)}
          >
            <div className="btn play-btn sprite_button">
              <i className="play-icon sprite_button"></i>
              播放
            </div>
          </div>
          <div
            className="btn add sprite_button"
            onClick={(e) => addMusic(topDetail.id)}
          ></div>
          <div className="btn collect sprite_button">
            <i className="collect-icon sprite_button">
              ({topDetail.subscribedCount})
            </i>
          </div>
          <div className="btn share sprite_button">
            <i className="share-icon sprite_button">({topDetail.shareCount})</i>
          </div>
          <div className="btn download sprite_button">
            <i className="download-icon sprite_button">下载</i>
          </div>
          <div className="btn comment sprite_button">
            <i className="comment-icon sprite_button">
              ({topDetail.commentCount})
            </i>
          </div>
        </div>
      </div>
    </ListDetailWrapper>
  )
})
