import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [], // 推荐-banner
  hotRecommendList: [], // 推荐-热门推荐列表
  newAlbums: [], // 推荐-新碟上架列表
  upRanking: {}, // 推荐-榜单-飙升榜
  newRanking: {}, // 推荐-榜单-新歌榜
  originRanking: {}, // 推荐-榜单-原创榜
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommendList', action.hotRecommendList)
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    default:
      return state
  }
}

export default reducer
