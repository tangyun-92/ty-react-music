import request from '@/services/request'

/**
 * 获取某首歌曲详情
 * @param {*} ids id
 */
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}