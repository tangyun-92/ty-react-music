import * as actionTypes from './constants'

import { getHotArtists } from '@/api/discover/artist'

const changeHotArtistAction = (hotArtists) => ({
  type: actionTypes.CHANGE_HOT_ARTIST,
  hotArtists,
})

/**
 * 热门歌手列表
 */
export const getHotArtistAction = (limit) => {
  return (dispatch) => {
    getHotArtists(limit).then(res => {
      dispatch(changeHotArtistAction(res.artists))
    })
  }
}
