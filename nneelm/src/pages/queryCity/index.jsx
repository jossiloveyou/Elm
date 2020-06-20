import React from 'react'
import { Header } from '@@'
import './styles.less'

export default function index () {
  return (
    <div>
      <Header 
        lef="/city"
        rig="/city"
        title={['', '', '切换城市']} 
        icons={['fanhui']}
      />

    </div>
  )
}
