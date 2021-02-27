import * as actionTypes from './constants'

import { getAllList } from '@/api/discover/top-list'

const changeCloudMusicTopListAction = (cloudMusicTopList) => ({
  type: actionTypes.CHANGE_CLOUD_MUSIC_TOP_LIST,
  cloudMusicTopList,
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
