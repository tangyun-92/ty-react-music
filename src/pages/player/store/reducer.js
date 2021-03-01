import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  playList: [], // 播放列表
  currentSong: {}, // 当前播放的歌曲
  currentSongIndex: 0, // 当前播放歌曲的索引
  sequence: 0, // 0循环播放 1随机播放 2单曲循环
  lyricList: [], // 歌词
  currentLyricIndex: 0, // 当前播放歌词的索引
  isPlayList: false, // 是否显示播放列表
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
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    case actionTypes.CHANGE_IS_PLAY_LIST:
      return state.set('isPlayList', action.isPlayList)
    default:
      return state
  }
}

export default reducer
