/*
 * @Author: 唐云 
 * @Date: 2021-02-20 15:49:29 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-20 16:04:50
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
 */
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}