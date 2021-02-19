/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-19 23:02:18
 * 推荐
 */
import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import TYTopBanner from './components/top-banner'

function TYRecommend(props) {
  return <RecommendWrapper>
    <TYTopBanner />
  </RecommendWrapper>
}

export default memo(TYRecommend)
