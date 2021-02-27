/*
 * @Author: 唐云
 * @Date: 2021-02-23 21:11:38
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 17:13:43
 * 歌词列表组件
 */
import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import { ListLyricWrapper } from './style'

export default memo(function PlayListLyric() {
  /**
   * state and props
   */
  const [lyricStyle, setLyricStyle] = useState(null)

  /**
   * redux hooks
   */
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }),
    shallowEqual
  )

  /**
   * other hooks
   */
  const lyricRef = useRef()
  
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return

    function scrollTo(element, to, duration) {
      if (duration <= 0) return
      var difference = to - element.scrollTop
      var perTick = (difference / duration) * 10
      let flag = element.scrollTop + perTick
      setLyricStyle({ transform: `translateY(-${flag}px)`, transition: 'all 0.6s linear' })
      if (flag === to) return
      scrollTo(element, to, duration - 10)
    }
    scrollTo(lyricRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <ListLyricWrapper ref={lyricRef}>
      <div className="lyric-content" style={lyricStyle}>
        {lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', {
                active: index === currentLyricIndex,
              })}
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </ListLyricWrapper>
  )
})
