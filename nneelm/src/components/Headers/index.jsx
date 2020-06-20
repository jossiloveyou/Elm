import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icons } from '@@'
import './style.less'

function Header (props) {
  const { lef = true, cen = false, rig = false, title = [], icons = [], history } = props
  const back = (route) => {
    if (route) history.push(route)
    
  }
  
  return (
    <div className="head-box">
       <div>
        <span onClick={() => back(lef)}>
          {icons[0] ? <Icons icons={icons[0]}/> : title[0]}
        </span>
      </div>
      <div>
        <span onClick={() => back(cen)}>
          {icons[1] ? <Icons icons={icons[1]}/> : title[1]}
        </span>
      </div>
      <div>
        <span onClick={() => back(rig)}>
          {icons[2] ? <Icons icons={icons[2]}/> : title[2]}
        </span>
      </div> 
    </div>
  )
}

export default withRouter(Header)