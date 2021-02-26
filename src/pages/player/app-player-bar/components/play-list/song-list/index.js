/*
 * @Author: 唐云
 * @Date: 2021-02-23 14:12:22
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-26 21:21:50
 * 播放列表-歌曲列表组件
 */
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { SongsWrapper, NoSongsWrapper, HaveSongsWrapper } from './style'
import {
  getSongDetailAction,
  changeIsPlayList,
  changePlayListAction,
  changeSongDetailAction,
} from '@/store/player/actionCreators'
import { formatMinuteSecond } from '@/utils/format-utils'

export default memo(function PlayListSongs() {
  /**
   * redux hook
   */
  const { playList, currentSongIndex, currentSong } = useSelector(
    (state) => ({
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  /**
   * handle function
   */
  // 隐藏播放列表
  const hidePlayList = () => {
    dispatch(changeIsPlayList(false))
  }

  // 播放列表中的音乐
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }

  // 删除列表中的某首歌曲
  const delSong = (id, e) => {
    e.stopPropagation()
    let newPlayList = [...playList]
    const PlayingId = currentSong.id // 播放中的歌曲id

    newPlayList.forEach((item, index) => {
      if (item.id === id) {
        if (item.id !== PlayingId) {
          newPlayList.splice(index, 1)
          dispatch(changePlayListAction(newPlayList))
          dispatch(getSongDetailAction(PlayingId))
        } else {
          // 如果删除正在播放的歌曲
          newPlayList.splice(index, 1)
          dispatch(changePlayListAction(newPlayList))
          if (newPlayList.length !== 0) {
            if (newPlayList.length === index) {
              // 如果是列表的最后一首自动播放上一首
              playMusic(newPlayList[index - 1])
            } else {
              // 播放下一首
              playMusic(newPlayList[index])
            }
          } else {
            // 如果是最后一首，清空播放中的歌曲
            dispatch(changeSongDetailAction(''))
          }
        }
      }
    })
  }

  return (
    <SongsWrapper>
      {playList.length !== 0 ? (
        <HaveSongsWrapper>
          {playList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={classNames('song-list', {
                  active: currentSongIndex === index,
                })}
                onClick={(e) => playMusic(item)}
              >
                <span className="song-play"></span>
                <span className="song-name text-nowrap">{item.name}</span>
                <span className="song-opera">
                  <div className="opera">
                    <button className="btn collect sprite_playlist"></button>
                    <button className="btn share sprite_playlist"></button>
                    <button className="btn download sprite_playlist"></button>
                    <button
                      className="btn del sprite_playlist"
                      onClick={(e) => delSong(item.id, e)}
                    ></button>
                  </div>
                </span>
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="song-time">{formatMinuteSecond(item.dt)}</span>
                <span className="song-from">
                  <i className="from-icon sprite_playlist"></i>
                </span>
              </div>
            )
          })}
        </HaveSongsWrapper>
      ) : (
        <NoSongsWrapper>
          <i className="icon sprite_playlist"></i>
          你还没有添加任何歌曲
          <br />
          去首页
          <NavLink
            to="/discover"
            className="link"
            onClick={(e) => hidePlayList()}
          >
            发现音乐
          </NavLink>
          ，或在
          <NavLink to="/mine" className="link" onClick={(e) => hidePlayList()}>
            我的音乐
          </NavLink>
          收听自己收藏的歌单。
        </NoSongsWrapper>
      )}
    </SongsWrapper>
  )
})
