import * as actionTypes from './constants'

import { getHotAnchors, getAllRadioClassify } from '@/api/discover/dj-radio'

const changeTopAnchorsAction = (hotAnchors) => ({
  type: actionTypes.CHANGE_HOT_ANCHOR,
  hotAnchors,
})

const changeAllRadioClassifyAction = allRadioClassify => ({
  type: actionTypes.CHANGE_ALL_RADIO_CLASSIFY,
  allRadioClassify
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

export const getAllRadioClassifyAction = () => {
  return dispatch => {
    getAllRadioClassify().then(res => {
      const array = res.categories
      array.push({'name': '常见问题', 'id': 777685787}, {'name': '我要做主播', 'id': 898675765})
      dispatch(changeAllRadioClassifyAction(array))
    })
  }
}
