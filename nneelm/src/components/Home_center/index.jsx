import React from 'react'
import './style.less'
import {Icons} from '@@'
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

export default function Home_center ({ data }) {
  const shop = data
  return (
    <div className="home-center">
        <div className="home_merchant">
          <Icons icons={'shouye'}/>
          附近商家
        </div>

        <div className="home_write">
            {
              shop.map(v => {
                return (
                 <Link to={`/shop/${v.id}`} key = {v.id}>
                     <div className="home_write_box" >
                        <div className="home_left">
                          <img src={`https://elm.cangdu.org/img/${v.image_path}`} alt="" />    
                        </div>
                        <div className="home_right">
                          <div>
                            <p>
                              <span>
                                <i>品牌</i>
                              </span>
                              <span>{v.name}</span>
                            </p>
                            <i>
                            {
                              v.supports.map(x => {
                                return <span key={x.id}>{x.icon_name}</span>
                              })
                            }
                            </i>
                          </div>
                          <div>
                            <div className="start">
                              <Rate disabled defaultValue={v.rating} />
                              <i>{v.rating}</i>
                              <i>月售{v.recent_order_num}单</i>
                            </div>
                            <p>
                              <span>
                                {v.delivery_mode.text}
                              </span>
                              <span>
                              {v.supports[1].name}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p>
                              <span>￥20起送/{v.piecewise_agent_fee.tips}</span>
                            </p>
                            <p>
                              <span>{v.distance}</span>/
                              <span>{v.order_lead_time}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      </Link>
                    )
                  })
                 
            }
        </div>
    </div>
  )
}

