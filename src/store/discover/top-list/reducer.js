import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  cloudMusicTopList: [], // 云音乐榜单列表
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CLOUD_MUSIC_TOP_LIST:
      return state.set('cloudMusicTopList', action.cloudMusicTopList)
    default:
      return state
  }
}

export default reducer