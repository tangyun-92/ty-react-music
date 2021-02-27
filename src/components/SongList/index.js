/*
 * @Author: 唐云
 * @Date: 2021-02-27 17:03:45
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 23:28:40
 * 歌曲列表组件
 */
import React, { memo } from 'react'

import { SongListWrapper } from './style'
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils'
import { useDispatch } from 'react-redux'
import { getSongDetailAction } from '@/store/player/actionCreators'

export default memo(function SongList(props) {
  /**
   * state and props
   */
  const { list } = props

  /**
   * redux hooks
   */
  const dispatch = useDispatch()

  /**
   * other handles
   */
  const playMusic = (id) => {
    dispatch(getSongDetailAction(id))
  }

  return (
    <SongListWrapper>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr className="" key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table" onClick={e => playMusic(item.id)}></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </SongListWrapper>
  )
})
