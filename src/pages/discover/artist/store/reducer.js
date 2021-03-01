import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotArtists: [], // 热门歌手列表
})

function reducer(state = defaultState, action) { 
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ARTIST:
      return state.set('hotArtists', action.hotArtists)
    default:
      return state
  }
 }

 export default reducer