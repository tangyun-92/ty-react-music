/*
 * @Author: 唐云
 * @Date: 2021-02-27 23:43:46
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 16:02:30
 * 歌单头部组件
 */
import React, { memo, useEffect, useState } from 'react'

import { PlayListHeaderWrapper } from './style'
import {
  getPlayListClassifyAction,
  changeCurrentClassify,
  getClassifySongsAction,
  changeCurrentPageAction,
} from '@/store/discover/play-list/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export default memo(function PlayListHeader() {
  /**
   * state and props
   */
  const [showClassify, setShowClassify] = useState(false)
  const [order, setOrder] = useState('最新')

  /**
   * redux hooks
   */
  const { playListClassify, currentClassify, pageSize } = useSelector(
    (state) => ({
      playListClassify: state.getIn(['playList', 'playListClassify']),
      currentClassify: state.getIn(['playList', 'currentClassify']),
      pageSize: state.getIn(['playList', 'pageSize']),
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
    // 重置为选中第一页
    dispatch(changeCurrentPageAction(1))
    dispatch(changeCurrentClassify(name))
    dispatch(getClassifySongsAction())
    setShowClassify(false)
  }

  const changeOrder = (order) => {
    if (order === '最新') {
      setOrder('热门')
      dispatch(getClassifySongsAction(pageSize, 1, 'new'))
    } else {
      setOrder('最新')
      console.log(order)
      dispatch(getClassifySongsAction(pageSize, 1, 'hot'))
    }
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
        <span
          className="right-btn sprite_button2"
          onClick={(e) => changeOrder(order)}
        >
          {order}
        </span>
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
