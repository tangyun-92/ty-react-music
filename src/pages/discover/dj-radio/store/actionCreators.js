import * as actionTypes from './constants'

import {
  getHotAnchors,
  getAllRadioClassify,
  getHotRadioRanks,
  getProgramRanks
} from '@/api/discover/dj-radio'

const changeTopAnchorsAction = (hotAnchors) => ({
  type: actionTypes.CHANGE_HOT_ANCHOR,
  hotAnchors,
})

const changeAllRadioClassifyAction = (allRadioClassify) => ({
  type: actionTypes.CHANGE_ALL_RADIO_CLASSIFY,
  allRadioClassify,
})

const changeHotRadioRanksAction = (hotRadioRanks) => ({
  type: actionTypes.CHANGE_HOT_RADIO_RANKS,
  hotRadioRanks,
})

const changeProgramRanksAction = (programRanks) => ({
  type: actionTypes.CHANGE_PROGRAM_RANKS,
  programRanks,
})

/**
 * 热门主播列表
 * @param {*} limit
 */
export const getTopAnchorsAction = (limit) => {
  return (dispatch) => {
    getHotAnchors(limit).then((res) => {
      dispatch(changeTopAnchorsAction(res.data.list))
    })
  }
}

/**
 * 所有分类
 */
export const getAllRadioClassifyAction = () => {
  return (dispatch) => {
    getAllRadioClassify().then((res) => {
      const array = res.categories
      array.push(
        { name: '常见问题', id: 777685787 },
        { name: '我要做主播', id: 898675765 }
      )
      dispatch(changeAllRadioClassifyAction(array))
    })
  }
}

/**
 * 热门电台榜
 * @param {*} limit
 */
export const getHotRadioRanksAction = (limit) => {
  return (dispatch) => {
    getHotRadioRanks(limit).then((res) => {
      dispatch(changeHotRadioRanksAction(res.toplist))
    })
  }
}

/**
 * 节目排行榜
 * @param {*} limit 
 */
export const getProgramRanksAction = (limit) => {
  return (dispatch) => {
    getProgramRanks(limit).then(res => {
      dispatch(changeProgramRanksAction(res.toplist))
    })
  }
}
