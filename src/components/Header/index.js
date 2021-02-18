/*
 * @Author: 唐云 
 * @Date: 2021-02-18 15:41:47 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-18 15:57:57
 * 头部组件
 */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function TYHeader() {
  return <div>
    <NavLink to="/">发现音乐</NavLink>
    <NavLink to="/mine">我的</NavLink>
    <NavLink to="/friend">朋友</NavLink>
  </div>
})
