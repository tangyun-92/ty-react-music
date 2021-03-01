import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotAnchors: [], // 热门主播列表
  allRadioClassify: [], // 所有分类
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set('hotAnchors', action.hotAnchors)
    case actionTypes.CHANGE_ALL_RADIO_CLASSIFY:
      return state.set('allRadioClassify', action.allRadioClassify)
    default:
      return state
  }
}

export default reducer