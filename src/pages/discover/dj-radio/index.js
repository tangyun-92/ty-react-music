/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-02 10:47:59
 * 主播电台
 */
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  DjRadioWrapper,
  Content,
  ClassifyWrapper,
  RecommendShowsWrapper,
  TopShows,
  RadioListWrapper,
} from './style'
import Classify from './components/classify'
import DjRadioShow from '@/components/DjRadioShow'
import { getHotRadioRanksAction } from '@/pages/discover/dj-radio/store/actionCreators'

export default memo(function TYDjRadio() {
  /**
   * redux hooks
   */
  const { hotRadioRanks } = useSelector(
    (state) => ({
      hotRadioRanks: state.getIn(['djRadio', 'hotRadioRanks']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getHotRadioRanksAction(10))
  }, [dispatch])

  return (
    <DjRadioWrapper>
      <Content className="wrap-v2">
        <ClassifyWrapper>
          <Classify />
        </ClassifyWrapper>
        <div className="shows-list">
          <RecommendShowsWrapper>
            <DjRadioShow
              title={'热门电台'}
              url={'/discover/dj-radio/hot-radio'}
              info={hotRadioRanks}
            />
          </RecommendShowsWrapper>
          <TopShows>
            <DjRadioShow title={'节目排行榜'} url={'/discover/dj-radio/rank'} />
          </TopShows>
        </div>
        <RadioListWrapper>RadioListWrapper</RadioListWrapper>
      </Content>
    </DjRadioWrapper>
  )
})
