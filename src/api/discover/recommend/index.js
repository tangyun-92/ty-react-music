/*
 * @Author: 唐云 
 * @Date: 2021-02-20 15:49:29 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-21 13:30:54
 * 发现音乐-推荐
 */
import request from '@/services/request.js'

/**
 * 获取banner列表
 */
export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

/**
 * 获取热门推荐列表
 * @param {*} limit 分页
 */
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

/**
 * 获取新碟上架列表
 * @param {*} limit 分页
 */
export function getNewAlbums(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

/**
 * 获取榜单列表
 * @param {*} idx id 
 */
export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}