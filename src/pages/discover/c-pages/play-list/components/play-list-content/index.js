/*
 * @Author: 唐云
 * @Date: 2021-02-27 23:43:15
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 16:19:46
 * 歌单内容组件
 */
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { PlayListContentWrapper } from './style'
import SongsCover from '@/components/SongsCover'
import TYPagination from '@/components/TYPagination'
import {
  changeCurrentPageAction,
  getClassifySongsAction,
} from '@/store/discover/play-list/actionCreators'

export default memo(function PlayListContent() {
  /**
   * redux hooks
   */
  const { classifySongs, currentPage, pageSize } = useSelector(
    (state) => ({
      classifySongs: state.getIn(['playList', 'classifySongs']),
      currentPage: state.getIn(['playList', 'currentPage']),
      pageSize: state.getIn(['playList', 'pageSize']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other handles
   */
  const classifyList = classifySongs.playlists || []
  const total = classifySongs.total || 0
  
  /**
   * other methods
   */
  const onPageChange = (page, pageSize) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(getClassifySongsAction(pageSize, page))
  }

  return (
    <PlayListContentWrapper>
      <div className="list">
        {classifyList.map((item, index) => {
          return (
            <div key={item.id}>
              <SongsCover
                key={item.id}
                info={item}
                right={'10px'}
                bottom={'4px'}
              />
            </div>
          )
        })}
      </div>
      <div className="pagination">
        <TYPagination
          currentPage={currentPage}
          pageSize={pageSize}
          total={total}
          onPageChange={onPageChange}
        />
      </div>
    </PlayListContentWrapper>
  )
})
