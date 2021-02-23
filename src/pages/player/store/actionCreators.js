import { getSongDetail, getLyric } from '@/api/player'
import * as actionsTypes from './constants'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'
import { message } from 'antd'

const changeSongDetailAction = (currentSong) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

export const changePlayListAction = (playList) => ({
  type: actionsTypes.CHANGE_PLAY_LIST,
  playList,
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: index,
})

const changeLyricListAction = (lyricList) => ({
  type: actionsTypes.CHANGE_LYRIC_LIST,
  lyricList,
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionsTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex: index,
})

export const changeSequenceAction = (sequence) => ({
  type: actionsTypes.CHANGE_SEQUENCE,
  sequence,
})

export const changeIsPlayList = (isPlayList) => ({
  type: actionsTypes.CHANGE_IS_PLAY_LIST,
  isPlayList
})

/**
 * 切歌
 * @param {*} tag 0顺序播放 1随机播放 2单曲循环
 */
export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['player', 'sequence'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const playList = getState().getIn(['player', 'playList'])

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        // 顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        }
        break
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeSongDetailAction(currentSong))

    // 获取歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

/**
 * 将歌曲添加到播放列表并且播放
 * @param {*} ids 歌曲id
 */
export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否存在该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex((song) => song.id === ids)

    // 判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {
      // 找到
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeSongDetailAction(song))
      // 请求歌曲的歌词
      dispatch(getLyricAction(song.id))
    } else {
      // 没找到，请求歌曲数据
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0]
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
        // 请求歌曲的歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

/**
 * 将歌曲添加到播放列表
 * @param {*} ids 歌曲id
 */
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
      message.success('已添加到播放列表')
    }
  }
}

/**
 * 获取歌词并解析
 * @param {*} id 歌曲id
 */
export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
