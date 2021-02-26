import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from './discover/recommend'
import { reducer as artistsReducer } from './discover/artist'
import { reducer as playerReducer } from '@/pages/player/store'

const cReducer = combineReducers({
  recommend: recommendReducer, // 推荐
  player: playerReducer, // 播放
  artist: artistsReducer, // 歌手
})

export default cReducer
