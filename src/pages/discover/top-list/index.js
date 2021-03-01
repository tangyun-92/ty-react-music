/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-26 23:20:25
 * 排行榜
 */
import React, { memo } from 'react'

import { TopListWrapper, Content, TopListLeft, TopListRight } from './style'
import LeftList from './components/left-list'
import ListDetail from './components/list-detail'
import SongList from './components/song-list'
import CommentList from './components/comment-list'

export default memo(function TYTopList() {
  return (
    <TopListWrapper>
      <Content className="wrap-v2">
        <TopListLeft>
          <LeftList />
        </TopListLeft>
        <TopListRight>
          <ListDetail />
          <SongList />
          <CommentList />
        </TopListRight>
      </Content>
    </TopListWrapper>
  )
})
