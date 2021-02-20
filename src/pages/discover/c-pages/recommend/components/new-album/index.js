/*
 * @Author: 唐云 
 * @Date: 2021-02-20 15:29:17 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-20 15:37:01
 * 推荐-新碟上架组件
 */
import React, { memo } from 'react'

import { NewAlbumWrapper } from './style'
import TYThemeHeaderRecommend from '@/components/ThemeHeaderRecommend'

export default memo(function TYNewAlbum() {
  return (
    <NewAlbumWrapper>
      <TYThemeHeaderRecommend
        title="新碟上架"
      ></TYThemeHeaderRecommend>
    </NewAlbumWrapper>
  )
})