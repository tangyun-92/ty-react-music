import React, { memo } from 'react'

import { Pagination } from 'antd'

import { TYPaginationWrapper } from './style'

export default memo(function TYPagination(props) {
  /**
   * state and props
   */
  const { currentPage, total, onPageChange, pageSize } = props

  /**
   * other handles
   */
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <span className="page-btn prev sprite_button2">上一页</span>
    }
    if (type === 'next') {
      return <span className="page-btn next sprite_button2">下一页</span>
    }
    return originalElement
  }

  return (
    <TYPaginationWrapper>
      <Pagination
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </TYPaginationWrapper>
  )
})
