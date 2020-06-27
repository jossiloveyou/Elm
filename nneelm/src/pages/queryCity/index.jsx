/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cs from 'classnames'
import { CITY_FETCH_QUERY, CITY_FETCH_SEARCH, CITY_FETCH_HISTORY, CITY_FETCH_DEL_HIS } from '@/constants/actionTypes'
import queryCityAction from '@/actions/queryCity'
import str from '@/utils/string'
import { Header } from '@@'
import './styles.less'

export default connect(({ queryCity }) => ({
  data: queryCity.data,
  queryData: queryCity.queryData,
  historyData: queryCity.historyData,
}), {
  onlyCity: queryCityAction[str(CITY_FETCH_QUERY)],
  searchData: queryCityAction[str(CITY_FETCH_SEARCH)],
  historyFn: queryCityAction[str(CITY_FETCH_HISTORY)],
  emptyFn: queryCityAction[str(CITY_FETCH_DEL_HIS)],
})(QueryCity)

function QueryCity (props) {
  const [sea, setSea] = useState(true)
  const [his, setHis] = useState(false)
  const { data, onlyCity, history, match, queryData, searchData, historyData, historyFn, emptyFn } = props
  const { id } = match.params
  const queryVal = useRef()
  const clk = () => {
    searchData({ keyword: queryVal.current.value, city_id: id})
    setSea(false)
    setHis(true)
  }
  const jump = (metadata) => {
    historyFn(metadata)
    history.push(`/dist/home?geohash=${metadata.geohash}`)
  } 

  const empty = () => {
    emptyFn()
  }

  useEffect(() => {
    onlyCity(id)
  },[id])
  
  return (
    <div className="query-box">
      <Header 
        lef="/city"
        rig="/city"
        title={['', queryData.name, '切换城市']} 
        icons={['fanhui']}
      />
      <div className="query-in">
        <div><input ref={queryVal} type="text" placeholder="输入学校、商务楼、地址"/></div>
        <div><button onClick={clk}>提交</button></div>
      </div>
      <div className="query-bot">
        <div className={cs('sear', { sea })}>
          {
            data.length>0? data.map(v => {
              return(
                <div key={v.geohash} onClick={() => jump(v)}>
                  <p>{v.name}</p>
                  <p>{v.address}</p>
                </div>
              )
            }):null
          }
        </div>

        <div className={cs('hist', { his })}>
          <p>搜索历史</p>
          
          {
            historyData.length > 0 ? (
              <span>
                {
                  historyData.map(v => {
                    return (
                      <NavLink to={`/dist/home?geohash=${v.geohash}`} key={v.geohash} className="query-his">
                        <p>{v.name}</p>
                        <p>{v.address}</p>
                      </NavLink>
                    )
                  })
                }
                <p className="empty" onClick={empty}>清空所有</p>
              </span>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}
