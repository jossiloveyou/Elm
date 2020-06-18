import React from 'react'
import './style.less'
export default function Home_nav (props) {
  const datas=props.data
  return (
    <div className="home-nav">
        {
            datas.map((v,i) => {
                if(datas.splice(8)){
                  return(
                    <dl key={i}>
                      <dt>
                        <img src={'https://fuss10.elemecdn.com'+v.image_url}/>
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

