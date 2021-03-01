import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  playListClassify: [], // 歌单分类
  currentClassify: '全部', // 选中的分类
  classifySongs: {}, // 分类下的歌单列表
  currentPage: 1, // 当前选中的分页
  pageSize: 35, // 每页显示条数
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST_CLASSIFY:
      return state.set('playListClassify', action.playListClassify)
    case actionTypes.CHANGE_CURRENT_CLASSIFY:
      return state.set('currentClassify', action.currentClassify)
    case actionTypes.CHANGE_CLASSIFY_SONGS:
      return state.set('classifySongs', action.classifySongs)
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set('currentPage', action.currentPage)
    default:
      return state
  }
}

export default reducer