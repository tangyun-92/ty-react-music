/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:02:37
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-20 16:14:07
 * 推荐-热门推荐组件
 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HotRecommendWrapper } from './style'
import TYThemeHeaderRecommend from '@/components/ThemeHeaderRecommend'
import { getRecommend } from './../../store/actionCreators'

export default memo(function TYHotRecommend() {
  // state
  const { hotRecommendList } = useSelector((state) => ({
    hotRecommendList: state.getIn(['recommend', 'hotRecommendList']),
    shallowEqual,
  }))

  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getRecommend(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <TYThemeHeaderRecommend
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommendList.map((item, index) => {
          return <div key={item}>{item.name}</div>
        })}
      </div>
    </HotRecommendWrapper>
  )
})
