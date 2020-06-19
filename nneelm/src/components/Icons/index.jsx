import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776885_pwknfihw32.js',
})

function Icons ({ icons }) {
  return <MyIcon type={`icon-${icons}`} className="myIcon" />
}

export default Icons
