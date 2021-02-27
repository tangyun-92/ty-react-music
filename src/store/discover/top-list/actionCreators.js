import * as actionTypes from './constants'

import { getAllList, getTopDetail } from '@/api/discover/top-list'

const changeCloudMusicTopListAction = (cloudMusicTopList) => ({
  type: actionTypes.CHANGE_CLOUD_MUSIC_TOP_LIST,
  cloudMusicTopList,
})

const changeTopDetailAction = topDetail => ({
  type: actionTypes.CHANGE_TOP_DETAIL,
  topDetail
})

/**
 * 获取云音乐榜单列表
 */
export const getCloudMusicTopListAction = () => {
  return (dispatch) => {
    getAllList().then((res) => {
      dispatch(changeCloudMusicTopListAction(res.list))
    })
  }
}

/**
 * 获取榜单详情
 */
export const getTopDetailAction = (id) => {
  return (dispatch) => {
    getTopDetail(id).then(res => {
      dispatch(changeTopDetailAction(res.playlist))
    })
  }
}
