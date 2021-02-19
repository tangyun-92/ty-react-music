/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-19 21:10:08
 * 推荐
 */
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function TYRecommend(props) {
  const { getBanners, topBanners } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return <div>TYRecommend: {topBanners.length}</div>
}

const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
})

const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(TYRecommend))
