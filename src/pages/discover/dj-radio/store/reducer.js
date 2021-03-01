import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotAnchors: [], // 热门主播列表
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set('hotAnchors', action.hotAnchors)
    default:
      return state
  }
}

export default reducer