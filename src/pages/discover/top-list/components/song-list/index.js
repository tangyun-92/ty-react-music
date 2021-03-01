/*
 * @Author: 唐云
 * @Date: 2021-02-26 23:17:10
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 23:06:44
 * 歌曲列表组件
 */
import React, { memo } from 'react'

import { SongListWrapper } from './style'
import TYSongList from '@/components/SongList'
import { shallowEqual, useSelector } from 'react-redux'

export default memo(function SongList() {
  /**
   * redux hooks
   */
  const { topDetail, songList } = useSelector(
    (state) => ({
      topDetail: state.getIn(['topList', 'topDetail']),
      songList: state.getIn(['topList', 'songList']),
    }),
    shallowEqual
  )

  return (
    <SongListWrapper>
      <div className="song-list-title">
        <div className="left">
          <div className="name">歌曲列表</div>
          <div className="num">{topDetail.trackCount}首歌</div>
        </div>
        <div className="right">
          播放：<span>{topDetail.playCount}</span>次
        </div>
      </div>
      <TYSongList list={songList} />
    </SongListWrapper>
  )
})
