/*
 * @Author: 唐云
 * @Date: 2021-02-27 17:03:45
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 23:19:02
 * 歌曲列表组件
 */
import React, { memo } from 'react'

import { SongListWrapper } from './style'
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils'

export default memo(function SongList(props) {
  const { list } = props

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
                      <span className="play sprite_table"></span>
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
