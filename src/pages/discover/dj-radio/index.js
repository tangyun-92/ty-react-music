/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-02 15:16:45
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
import DjRadioList from '@/components/DjRadioList'
import {
  getHotRadioRanksAction,
  getProgramRanksAction,
  getTypeRecommendsAction,
} from '@/pages/discover/dj-radio/store/actionCreators'

export default memo(function TYDjRadio() {
  /**
   * redux hooks
   */
  const {
    hotRadioRanks,
    programRanks,
    typeRecommendStory,
    typeRecommendSleeping,
    typeRecommendTalking,
    typeRecommendEmotional,
    typeRecommendCover,
    typeRecommendOther,
  } = useSelector(
    (state) => ({
      hotRadioRanks: state.getIn(['djRadio', 'hotRadioRanks']),
      programRanks: state.getIn(['djRadio', 'programRanks']),
      typeRecommendStory: state.getIn(['djRadio', 'typeRecommendStory']),
      typeRecommendSleeping: state.getIn(['djRadio', 'typeRecommendSleeping']),
      typeRecommendTalking: state.getIn(['djRadio', 'typeRecommendTalking']),
      typeRecommendEmotional: state.getIn([
        'djRadio',
        'typeRecommendEmotional',
      ]),
      typeRecommendCover: state.getIn(['djRadio', 'typeRecommendCover']),
      typeRecommendOther: state.getIn(['djRadio', 'typeRecommendOther']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getHotRadioRanksAction(10))
    dispatch(getProgramRanksAction(10))
    dispatch(getTypeRecommendsAction(2))
    dispatch(getTypeRecommendsAction(6))
    dispatch(getTypeRecommendsAction(5))
    dispatch(getTypeRecommendsAction(3))
    dispatch(getTypeRecommendsAction(2001))
    dispatch(getTypeRecommendsAction(11))
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
            <DjRadioShow
              title={'节目排行榜'}
              url={'/discover/dj-radio/rank'}
              info={programRanks}
            />
          </TopShows>
        </div>
        <RadioListWrapper>
          <DjRadioList
            title={'音乐故事·电台'}
            url={'/#/discover/dj-radio'}
            info={typeRecommendStory}
          />
          <DjRadioList
            title={'助眠解压·电台'}
            url={'/#/discover/dj-radio'}
            info={typeRecommendSleeping}
          />
          <DjRadioList
            title={'谈天说地·电台'}
            url={'/#/discover/dj-radio'}
            info={typeRecommendTalking}
          />
          <DjRadioList
            title={'情感调频·电台'}
            url={'/#/discover/dj-radio'}
            info={typeRecommendEmotional}
          />
          <DjRadioList
            title={'创作翻唱·电台'}
            url={'/#/discover/dj-radio'}
            info={typeRecommendCover}
          />
          <DjRadioList
            title={'其他·电台'}
            url={'/#/discover/dj-radio'}
            info={typeRecommendOther}
          />
        </RadioListWrapper>
      </Content>
    </DjRadioWrapper>
  )
})
