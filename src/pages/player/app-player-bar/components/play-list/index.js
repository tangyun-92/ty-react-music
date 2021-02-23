/*
 * @Author: 唐云
 * @Date: 2021-02-23 09:21:48
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-23 14:15:51
 * 播放列表
 */
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { changeIsPlayList } from '../../../store/actionCreators'
import {
  PlayListWrapper,
  ListHeaderWrapper,
  SongListWrapper,
  ListLyricWrapper,
} from './style'
import PlayListHeader from './list-header'
import PlayListSongs from './song-list'

export default memo(function PlayList() {
  const dispatch = useDispatch()

  // 点击空白区域关闭播放列表
  const maskRef = useRef()
  useEffect(() => {
    const currentClass = maskRef.current && maskRef.current.className
    document.body.addEventListener('click', (e) => {
      if (e.target.className === currentClass) {
        dispatch(changeIsPlayList(false))
      }
    })
  }, [dispatch])

  return (
    <PlayListWrapper>
      <div className="mask" ref={maskRef}></div>
      <div className="container">
        <ListHeaderWrapper>
          <PlayListHeader></PlayListHeader>
        </ListHeaderWrapper>
        <div className="content">
          <img
            className="img-bg"
            src="https://p2.music.126.net/SNSTwkUVrjyK_spAjOSXDw==/109951164739755353.jpg"
            alt=""
          />
          <SongListWrapper>
            <PlayListSongs />
          </SongListWrapper>
          <div className="line"></div>
          <ListLyricWrapper>ListLyricWrapper</ListLyricWrapper>
        </div>
      </div>
    </PlayListWrapper>
  )
})
