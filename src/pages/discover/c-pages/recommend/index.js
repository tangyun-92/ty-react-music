/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-24 21:47:26
 * 推荐
 */
import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'
import TYTopBanner from './components/top-banner'
import TYHotRecommend from './components/hot-recommend'
import TYNewAlbum from './components/new-album'
import TYRanking from './components/ranking'
import PersonalInfo from './components/personal-info'
import InSinger from './components/in-singer'
import HotAnchor from './components/hot-anchor'

function TYRecommend(props) {
  return (
    <RecommendWrapper>
      <TYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <TYHotRecommend />
          <TYNewAlbum />
          <TYRanking />
        </RecommendLeft>
        <RecommendRight>
          <PersonalInfo />
          <InSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(TYRecommend)
