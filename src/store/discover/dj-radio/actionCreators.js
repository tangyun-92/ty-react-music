import * as actionTypes from './constants'

import { getHotAnchors } from '@/api/discover/dj-radio'

const changeTopAnchorsAction = (hotAnchors) => ({
  type: actionTypes.CHANGE_HOT_ANCHOR,
  hotAnchors,
})

/**
 * 热门主播列表
 * @param {*} limit 
 */
export const getTopAnchorsAction = (limit) => {
  return (dispatch) => {
    getHotAnchors(limit).then(res => {
      dispatch(changeTopAnchorsAction(res.data.list))
    })
  }
}