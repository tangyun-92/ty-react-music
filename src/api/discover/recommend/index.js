import request from '@/services/request.js'

/**
 * 获取banner列表
 */
export function getTopBanners() {
  return request({
    url: '/banner',
  })
}
