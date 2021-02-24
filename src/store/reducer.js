import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'
import { reducer as artistsReducer } from '@/pages/discover/c-pages/artist/store'
import { reducer as playerReducer } from '@/pages/player/store'

const cReducer = combineReducers({
  recommend: recommendReducer, // 推荐
  player: playerReducer, // 播放
  artist: artistsReducer, // 歌手
})

export default cReducer
