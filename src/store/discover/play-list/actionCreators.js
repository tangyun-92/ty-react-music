import * as actionTypes from './constants'

import { getPlayListClassify, getClassifySongs } from '@/api/discover/play-list'

const changePlayListClassifyAction = (playListClassify) => ({
  type: actionTypes.CHANGE_PLAY_LIST_CLASSIFY,
  playListClassify,
})

const changeClassifySongs = (res) => ({
  type: actionTypes.CHANGE_CLASSIFY_SONGS,
  classifySongs: res,
})

export const changeCurrentClassify = (currentClassify) => ({
  type: actionTypes.CHANGE_CURRENT_CLASSIFY,
  currentClassify,
})

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
})

/**
 * 获取歌单分类
 */
export const getPlayListClassifyAction = () => {
  return (dispatch) => {
    getPlayListClassify().then((res) => {
      const category = res.categories
      // 创建类别数据结构
      const categoryData = Object.entries(category).map(([key, value]) => {
        return {
          name: value,
          subs: [],
        }
      })
      // 将类别数据添加到数组对应的对象中
      for (let item of res.sub) {
        categoryData[item.category].subs.push(item)
      }
      dispatch(changePlayListClassifyAction(categoryData))
    })
  }
}

/**
 * 获取分类下的歌单列表
 */
export const getClassifySongsAction = (page = 35, offset = 1, order) => {
  return (dispatch, getState) => {
    const cat = getState().getIn(['playList', 'currentClassify'])
    getClassifySongs(cat, page, offset, order).then((res) => {
      dispatch(changeClassifySongs(res))
    })
  }
}
