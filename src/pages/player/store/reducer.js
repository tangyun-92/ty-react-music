import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  playList: [], // 播放列表
  currentSong: {}, // 当前播放的歌曲
  currentSongIndex: 0, // 当前播放歌曲的索引
  sequence: 0, // 0循环播放 1随机播放 2单曲循环
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence)
    default:
      return state
  }
}

export default reducer