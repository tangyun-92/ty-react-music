/*
 * @Author: 唐云
 * @Date: 2021-03-01 21:08:12
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 22:21:28
 * 分类组件
 */
import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

import { ClassifyWrapper } from './style'
import { getAllRadioClassifyAction } from '../../store/actionCreators'

export default memo(function Classify() {
  /**
   * state and props
   */
  const [classifyIndex, setClassifyIndex] = useState(0) // 被点击的分类索引

  /**
   * redux hooks
   */
  const { allRadioClassify } = useSelector(
    (state) => ({
      allRadioClassify: state.getIn(['djRadio', 'allRadioClassify']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getAllRadioClassifyAction())
  }, [dispatch])

  /**
   * other methods
   */
  // 分类点击
  const handleClassify = (item, index) => {
    setClassifyIndex(index)
  }

  return (
    <ClassifyWrapper>
      <div className="list">
        {allRadioClassify.map((item, index) => {
          return (
            <div
              key={item.id}
              className={classnames('item', {
                active: classifyIndex === index && index < 12,
              })}
              onClick={(e) => handleClassify(item, index)}
            >
              {index === 12 ? (
                <a
                  className="to-problem"
                  href="https://music.163.com/#/topic?id=18652232"
                  target="_blank"
                  rel="noreferrer"
                >
                  常见问题
                </a>
              ) : (
                ''
              )}
              <i className={'icon' + index}></i>
              <div className="text">{item.name}</div>
            </div>
          )
        })}
      </div>
    </ClassifyWrapper>
  )
})
