import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotAnchors: [], // 热门主播列表
  allRadioClassify: [], // 所有分类
  hotRadioRanks: [], // 热门电台榜
  programRanks: [], // 节目排行榜
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_HOT_ANCHOR:
      return state.set('hotAnchors', action.hotAnchors)
    case actionTypes.CHANGE_ALL_RADIO_CLASSIFY:
      return state.set('allRadioClassify', action.allRadioClassify)
    case actionTypes.CHANGE_HOT_RADIO_RANKS:
      return state.set('hotRadioRanks', action.hotRadioRanks)
    case actionTypes.CHANGE_PROGRAM_RANKS:
      return state.set('programRanks', action.programRanks)
    default:
      return state
  }
}

export default reducer