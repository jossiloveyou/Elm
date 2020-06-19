import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776885_ty0wvk13rva.js',
})

function Icons ({ icons }) {
  return <MyIcon type={`icon-${icons}`} />
}

export default Icons
