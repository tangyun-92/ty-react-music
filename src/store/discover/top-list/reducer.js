import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  cloudMusicTopList: [], // 云音乐榜单列表
  topDetail: [], // 榜单详情
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CLOUD_MUSIC_TOP_LIST:
      return state.set('cloudMusicTopList', action.cloudMusicTopList)
    case actionTypes.CHANGE_TOP_DETAIL:
      return state.set('topDetail', action.topDetail)
    default:
      return state
  }
}

export default reducer