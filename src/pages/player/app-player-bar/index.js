/*
 * @Author: 唐云
 * @Date: 2021-02-21 14:34:07
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-21 22:45:10
 * 播放器组件
 */
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { Slider } from 'antd'

import { PlayBarWrapper, Control, PlayInfo, Operator } from './style'
import { getSongDetailAction } from './../store/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

export default memo(function AppPlayerBar() {
  /**
   * props and state
   */
  const [currentTime, setCurrentTime] = useState(0) // 播放中的时间
  const [progress, setProgress] = useState(0) // 实时进度条（播放中）
  const [isChanging, setIsChanging] = useState(false) // 是否正在改变进度条
  const [isPlaying, setIsPlaying] = useState(false) // 播放状态

  /**
   * redux hook
   */
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   *  other hooks
   */
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    // 歌曲路径
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  /**
   * other handle
   */
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '' // 歌曲图片
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手' // 歌手名称
  const duration = currentSong.dt || 0 // 歌曲总时长

  /**
   * handle function
   */
  // 点击播放音乐
  const playMusic = useCallback(() => {
    // 播放歌曲
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  // 监听播放时间
  const timeUpdate = (e) => {
    // 乘以1000转为毫秒
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / duration) * 100)
    }
  }

  // 进度条改变时
  const sliderChange = useCallback(
    (value) => {
      setProgress(value)
      const currentTime = ((value / 100.0) * duration)
      setCurrentTime(currentTime)
      setIsChanging(true)
    },
    [duration]
  )

  // 进度条改变后
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000 // 进度条改变后的时间
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)

      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )

  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev"></button>
          <button
            className="sprite_playbar play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/todo" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatDate(currentTime, 'mm:ss')}
                </span>
                <span className="divider">/</span>
                <span className="duration">
                  {formatDate(duration, 'mm:ss')}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayBarWrapper>
  )
})
