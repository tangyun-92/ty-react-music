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

/**
 * 获取指定歌曲的歌词
 * @param {*} id 歌曲id
 */
export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}