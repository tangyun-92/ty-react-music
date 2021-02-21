/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-21 13:38:59
 * 推荐-榜单组件
 */
import React, { memo, useEffect } from 'react'

import { RankingWrapper } from './style'
import TYThemeHeaderRecommend from '@/components/ThemeHeaderRecommend'
import { getTopListAction } from './../../store/actionCreators'
import { useDispatch } from 'react-redux'

export default memo(function TYRanking() {
  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <TYThemeHeaderRecommend title="榜单" />
    </RankingWrapper>
  )
})
