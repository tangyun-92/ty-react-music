import { getSongDetail } from '@/api/player'
import * as actionsTypes from './constants'

const changeSongDetailAction = (currentSong) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]))
    })
  }
}
