/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-20 15:39:58
 * 推荐-榜单组件
 */
import React, { memo } from 'react'

import { RankingWrapper } from './style'
import TYThemeHeaderRecommend from '@/components/ThemeHeaderRecommend'

export default memo(function TYRanking() {
  return (
    <RankingWrapper>
      <TYThemeHeaderRecommend title="榜单"></TYThemeHeaderRecommend>
    </RankingWrapper>
  )
})
