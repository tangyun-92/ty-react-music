/*
 * @Author: 唐云 
 * @Date: 2021-02-26 22:59:36 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-27 14:28:07
 * 推荐-排行榜
 */
import request from '@/services/request'

/**
 * 获取所有榜单
 */
export function getAllList() {
  return request({
    url: '/toplist'
  })
}

/**
 * 获取榜单详情
 * @param {*} limit 
 */
export function getTopDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}