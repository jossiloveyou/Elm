/* eslint-disable array-callback-return */
import React from 'react'
import './style.less'

export default function Home_nav ({ data }) {
  const datas = data
  return (
    <div className="home-nav">
        {
            datas.map(v => {
                if(datas.splice(8)){
                  return(
                    <dl key={v.id}>
                      <dt>
                        <img src={`https://fuss10.elemecdn.com${v.image_url}`} alt="" />
                      </dt>
                      <dd>{v.title}</dd>
                    </dl>
                  )
                }
            })
        }
        <div className="home_position">
          <span></span>
          <span></span>
        </div>
    </div>
  )
}

