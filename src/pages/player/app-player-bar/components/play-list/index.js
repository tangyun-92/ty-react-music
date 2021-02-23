/*
 * @Author: 唐云
 * @Date: 2021-02-23 09:21:48
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-23 11:07:06
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

export default memo(function PlayList() {
  const dispatch = useDispatch()
  
  const playListRef = useRef()
  useEffect(() => {
    document.addEventListener('click', e => {
      if (!e.target.src && playListRef.current) {
        dispatch(changeIsPlayList(false))
      }
    })
  }, [dispatch])

  return (
    <PlayListWrapper ref={playListRef} className="play-list">
      <ListHeaderWrapper src="play-list">
        <PlayListHeader></PlayListHeader>
      </ListHeaderWrapper>
      <div className="content">
        <img
          className="img-bg"
          src="https://p2.music.126.net/SNSTwkUVrjyK_spAjOSXDw==/109951164739755353.jpg"
          alt=""
        />
        <SongListWrapper>SongListWrapper</SongListWrapper>
        <div className="line"></div>
        <ListLyricWrapper>ListLyricWrapper</ListLyricWrapper>
      </div>
    </PlayListWrapper>
  )
})
