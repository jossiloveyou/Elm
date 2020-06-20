/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Icons } from '@@'
import { CITY_FETCH_HOT, CITY_FETCH_ALL } from '@/constants/actionTypes'
import cityAction from '@/actions/city'
import str from '@/utils/string'
import './styles.less'

export default connect(({ city }) => ({
  hotCity: city.hotCity,
  allCity: city.allCity,
}),{
  hotCit: cityAction[str(CITY_FETCH_HOT)],
  allCit: cityAction[str(CITY_FETCH_ALL)],
})(City)

function City (props) {
  const { hotCit, allCit, hotCity, allCity } = props
  useEffect(() => {
    hotCit()
    allCit()
  }, [])


  return (
    <div className="city-box">
      <Header
        lef="/city"
        rig="/login"
        title={['ele.me', '', '登录|注册']}
      />
      <div className="city-cen">
        {/* 当前城市 */}
        <div>
          <p>当前定位城市: <span>定位不准时，请在城市列表中选择</span></p>
          <p>
            <NavLink to="/city">
              <Icons icons="youjiantou"/>
            </NavLink>
          </p>
        </div>
        {/* 热门城市 */}
        <div>
          <p>热门城市</p>
          <ul>
            {
              hotCity.map(v => {
                return (
                  <NavLink activeClassName="hot-city" to="/" key={v.id}>
                    {v.name}
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
        {/* 全部 */}
        {
          allCity.map((v, i) => {
            return(
              <div className="city-all" key={i}>
                <p>{i === 0 ? (<span>{v[0]} <span>(按字母排序)</span></span>): <span>{v[0]}</span>}</p>
                <ul>
                {
                  v[1].map(j => {
                    return (
                      <NavLink to={`/city/${j.id}`} key={j.id}>
                        {j.name}
                      </NavLink>
                    )
                  })
                }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
