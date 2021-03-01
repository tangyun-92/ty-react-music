/*
 * @Author: 唐云 
 * @Date: 2021-02-28 22:43:31 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 10:06:26
 * 发现-歌单
 */
import request from '@/services/request'

/**
 * 获取歌单分类
 */
export function getPlayListClassify() {
  return request({
    url: '/playlist/catlist'
  })
}

/**
 * 获取分类下的歌单列表
 */
export function getClassifySongs(limit, cat) {
  return request({
    url: '/top/playlist',
    params: {
      limit,
      cat
    }
  })
}