/*
 * @Author: 唐云 
 * @Date: 2021-02-26 22:59:36 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-26 23:01:35
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