import * as actionTypes from './constants'

import { getTopBanners, getHotRecommend } from '@/api/discover/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})

const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommendList: res.result,
})

export const getTopBanner = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getRecommend = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeRecommendAction(res))
    })
  }
}
