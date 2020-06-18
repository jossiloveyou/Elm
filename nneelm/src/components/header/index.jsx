import React from 'react';
import { withRouter } from 'react-router-dom'

function Header (props) {
  const { lef = false, cen = false, rig = false, title, history } = props
  const back = (route) => {
    history.push(route)
  }

  const head = () => {
    if(lef.length === 1) lef[1] = ''
    if(cen.length === 1) lef[1] = ''
    if(rig.length === 1) lef[1] = ''
  }

  return (
    <div className="head-box">
       <div>
        <span onClick={back(lef)}>
          {title}
        </span>
      </div>
      <div>
      <span onClick={back(cen)}>
        {title}
      </span>
      </div>
      <div>
        <span onClick={back(rig)}>
          {title}
        </span>
      </div> 
    </div>
  )
}

export default withRouter(Header)