/*
 * @Author: 唐云
 * @Date: 2021-02-26 23:17:10
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 23:04:57
 * 排行榜左侧榜单组件
 */
import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import {
  getCloudMusicTopListAction,
  getTopDetailAction,
} from '@/store/discover/top-list/actionCreators'
import { LeftListWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function LeftList() {
  /**
   * state and props
   */
  const [listIndex, setListIndex] = useState(0) // 榜单索引

  /**
   * redux hooks
   */
  const { cloudMusicTopList } = useSelector(
    (state) => ({
      cloudMusicTopList: state.getIn(['topList', 'cloudMusicTopList']), // 特色榜数据
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getCloudMusicTopListAction())
    dispatch(getTopDetailAction(19723756))
  }, [dispatch])

  /**
   * other methods
   */
  const handleListIndex = (item, index) => {
    setListIndex(index)
    dispatch(getTopDetailAction(item.id))
  }

  return (
    <LeftListWrapper>
      <div className="content">
        <div className="list">
          <div className="title">云音乐特色榜</div>
          <div className="title title-media">全球媒体榜</div>
          {cloudMusicTopList.map((item, index) => {
            return (
              <div
                className={classNames('item', {
                  active: listIndex === index,
                })}
                key={item.id}
                onClick={(e) => handleListIndex(item, index)}
              >
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="time">{item.updateFrequency}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </LeftListWrapper>
  )
})
