/*
 * @Author: 唐云
 * @Date: 2021-02-23 11:05:54
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-23 14:36:12
 * 播放列表头部组件
 */
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Popconfirm, message } from 'antd'

import { ListHeaderWrapper } from './style'
import {
  changeIsPlayList,
  changePlayListAction,
} from '../../../../store/actionCreators'
import { useDispatch } from 'react-redux'

export default memo(function PlayListHeader() {
  /**
   * redux hook
   */
  const { playList } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
    }),
    shallowEqual
  )

  /**
   * other hooks
   */
  const dispatch = useDispatch()

  // 关闭播放列表
  const closeList = () => {
    dispatch(changeIsPlayList(false))
  }

  // 清空播放列表
  const clearPlayList = () => {
    dispatch(changePlayListAction([]))
    message.success('清除成功')
  }

  return (
    <ListHeaderWrapper>
      <div className="left">
        <span className="play-list">播放列表({playList.length})</span>
        <span className="left-opera">
          <span className="opera link">
            <i className="icon icon-collect sprite_playlist"></i>收藏全部
          </span>
          <span className="line"></span>
          <Popconfirm
            title="确定清除播放列表？"
            onConfirm={(e) => clearPlayList()}
            okText="确定"
            cancelText="取消"
          >
            <span className="opera link">
              <i className="icon icon-clear sprite_playlist"></i>清除
            </span>
          </Popconfirm>
        </span>
      </div>
      <div className="right">
        <span className="song-name">玫瑰玫瑰</span>
        <span
          className="close sprite_playlist"
          onClick={(e) => closeList()}
        ></span>
      </div>
    </ListHeaderWrapper>
  )
})
