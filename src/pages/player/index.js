/*
 * @Author: 唐云
 * @Date: 2021-02-21 22:49:39
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-23 10:25:35
 * 歌曲播放界面
 */
import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function Player() {
  return <PlayerWrapper>
    <div className="content wrap-v2">
      <PlayerLeft>
        <h2>PlayerInfo</h2>
        <h2>PLayerContent</h2>
      </PlayerLeft>
      <PlayerRight>
        <h2>Songs</h2>
        <h2>SimilarSong</h2>
        <h2>DownLoad</h2>
      </PlayerRight>
    </div>
  </PlayerWrapper>
})
