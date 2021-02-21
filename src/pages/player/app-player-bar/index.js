/*
 * @Author: 唐云
 * @Date: 2021-02-21 14:34:07
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-21 15:02:34
 * 播放器组件
 */
import React, { memo } from 'react'

import { Slider } from 'antd'

import { PlayBarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function AppPlayerBar() {
  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play"></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img
                src="http://p4.music.126.net/6Jdgh303iLFmxbPUllu6wA==/109951163678416509.jpg?param=34y34"
                alt=""
              />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">红豆</span>
              <a href="/todo" className="singer-name">
                王菲
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">01:33</span>
                <span className="divider">/</span>
                <span className="duration">04:30</span>
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
    </PlayBarWrapper>
  )
})
