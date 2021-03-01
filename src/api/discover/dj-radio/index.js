/*
 * @Author: 唐云 
 * @Date: 2021-02-26 21:40:58 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 21:16:14
 * 发现音乐-主播电台
 */
import request from '@/services/request'

/**
 * 获取热门主播列表
 * @param {*} limit 
 */
export function getHotAnchors(limit) {
  return request({
    url: '/dj/toplist/popular',
    params: {
      limit,
    },
  })
}

/**
 * 获取所有电台分类
 */
export function getAllRadioClassify() {
  return request({
    url: '/dj/catelist'
  })
}