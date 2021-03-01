import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/recommend/store'
import { reducer as artistsReducer } from '@/pages/discover/artist/store'
import { reducer as playerReducer } from '@/pages/player/store'
import { reducer as anchorReducer } from '@/pages/discover/dj-radio/store'
import { reducer as topListReducer } from '@/pages/discover/top-list/store'
import { reducer as playListReducer } from '@/pages/discover/play-list/store'

const cReducer = combineReducers({
  recommend: recommendReducer, // 推荐
  player: playerReducer, // 播放
  artist: artistsReducer, // 歌手
  anchor: anchorReducer, // 主播
  topList: topListReducer, // 排行榜
  playList: playListReducer, // 歌单
})

export default cReducer
