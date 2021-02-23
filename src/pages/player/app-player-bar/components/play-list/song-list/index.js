/*
 * @Author: 唐云
 * @Date: 2021-02-23 14:12:22
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-23 14:19:23
 * 播放列表-歌曲列表组件
 */
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { SongsWrapper } from './style'

export default memo(function PlayListSongs() {
  /**
   * redux hook
   */
  const { playList } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
    }),
    shallowEqual
  )

  return <SongsWrapper>{playList.length}</SongsWrapper>
})
