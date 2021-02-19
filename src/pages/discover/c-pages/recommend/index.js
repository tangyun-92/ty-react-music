/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-19 22:44:19
 * 推荐
 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function TYRecommend(props) {
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get('recommend').get('topBanners'),
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return <div>TYRecommend: {topBanners.length}</div>
}

export default memo(TYRecommend)
