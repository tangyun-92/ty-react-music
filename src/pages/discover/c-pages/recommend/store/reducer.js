import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [], // 推荐-banner
  hotRecommendList: [], // 推荐-热门推荐列表
  newAlbums: [], // 推荐-新碟上架列表
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommendList', action.hotRecommendList)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    default:
      return state
  }
}

export default reducer
