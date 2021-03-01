/*
 * @Author: 唐云
 * @Date: 2021-02-27 23:43:46
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 10:05:15
 * 歌单头部组件
 */
import React, { memo, useEffect, useState } from 'react'

import { PlayListHeaderWrapper } from './style'
import {
  getPlayListClassifyAction,
  changeCurrentClassify,
  getClassifySongsAction,
} from '@/store/discover/play-list/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function PlayListHeader() {
  /**
   * state and props
   */
  const [showClassify, setShowClassify] = useState(false)

  /**
   * redux hooks
   */
  const { playListClassify, currentClassify } = useSelector(
    (state) => ({
      playListClassify: state.getIn(['playList', 'playListClassify']),
      currentClassify: state.getIn(['playList', 'currentClassify']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getPlayListClassifyAction())
  }, [dispatch])
  useEffect(() => {
    dispatch(getClassifySongsAction())
  }, [dispatch])

  /**
   * other handles
   */
  // 选择分类
  function checkClassify(name) {
    dispatch(changeCurrentClassify(name))
    dispatch(getClassifySongsAction())
    setShowClassify(false)
  }

  return (
    <PlayListHeaderWrapper>
      <div className="play-list-header">
        <div className="left">
          <span className="text">{currentClassify}</span>
          <button
            className="check sprite_button"
            onClick={(e) => setShowClassify(!showClassify)}
          >
            <i className="check-btn sprite_button">
              选择分类<em className="icon sprite_icon2"></em>
            </i>
          </button>
        </div>
        <a href="/todo" className="right-btn sprite_button2">
          热门
        </a>
      </div>
      {showClassify ? (
        <div className="play-list-dialog">
          <div className="hd">
            <i className="hd-icon sprite_icon"></i>
          </div>
          <div className="bd">
            <div className="all">
              <span
                className="all-btn sprite_button2 link"
                onClick={(e) => checkClassify('全部')}
              >
                全部风格
              </span>
            </div>
            <dl className="item">
              {playListClassify.map((item, index) => {
                return (
                  <div key={item.name} className="item-con">
                    <dt className={'dt' + index}>
                      <i className="item-icon sprite_icon2"></i>
                      {item.name}
                    </dt>
                    <dd>
                      {item.subs.map((itemX) => {
                        return (
                          <span key={itemX.name}>
                            <span
                              className="item-text link"
                              onClick={(e) => checkClassify(itemX.name)}
                            >
                              {itemX.name}
                            </span>
                            <span className="line">|</span>
                          </span>
                        )
                      })}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      ) : null}
    </PlayListHeaderWrapper>
  )
})
