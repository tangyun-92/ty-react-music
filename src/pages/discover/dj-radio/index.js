/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 21:22:54
 * 主播电台
 */
import React, { memo } from 'react'

import {
  DjRadioWrapper,
  Content,
  ClassifyWrapper,
  RecommendShowsWrapper,
  TopShows,
  RadioListWrapper,
} from './style'
import Classify from './components/classify'

export default memo(function TYDjRadio() {
  return (
    <DjRadioWrapper>
      <Content className="wrap-v2">
        <ClassifyWrapper>
          <Classify />
        </ClassifyWrapper>
        <div className="shows-list">
          <RecommendShowsWrapper>RecommendShowsWrapper</RecommendShowsWrapper>
          <TopShows>TopShows</TopShows>
        </div>
        <RadioListWrapper>RadioListWrapper</RadioListWrapper>
      </Content>
    </DjRadioWrapper>
  )
})
