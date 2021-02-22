import { getSongDetail } from '@/api/player'
import * as actionsTypes from './constants'

const changeSongDetailAction = (currentSong) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

const changePlayListAction = (playList) => ({
  type: actionsTypes.CHANGE_PLAY_LIST,
  playList,
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: index,
})

export const changeSequenceAction = (sequence) => ({
  type: actionsTypes.CHANGE_SEQUENCE,
  sequence
})

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex((song) => song.id === ids)

    // 判断是否找到歌曲
    if (songIndex !== -1) {
      // 找到
      dispatch(changeCurrentSongIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeSongDetailAction(song))
    } else {
      // 没找到，请求歌曲数据
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 将请求到的歌曲放入播放列表
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 更新redux中的值
        dispatch(changePlayListAction(newPlayList))
        // 更新正在播放歌曲的索引
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        // 更新正在播放的歌曲
        dispatch(changeSongDetailAction(song))
      })
    }
  }
}

// 将歌曲添加到播放列表
export const getSongToPlayListAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex((song) => song.id === ids)
    
    if (songIndex === -1) {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0]
        if (!song) return
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
      })
    }
  }
}

// export const getSequenceAction = (sequence) => {

// }