import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

function Header (props) {
  const { lef = false, cen = false, rig = false, title, history } = props
  const back = (route) => {
    if (route) {
      history.push(route)
    }
  }

  return (
    <div className="head-box">
       <div>
        <span onClick={() => back(lef)}>
          {title[0]}
        </span>
      </div>
      <div>
      <span onClick={() => back(cen)}>
        {title[1]}
      </span>
      </div>
      <div>
        <span onClick={() => back(rig)}>
          {title[2]}
        </span>
      </div> 
    </div>
  )
}

export default withRouter(Header)