/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import cs from 'classnames'
import { CITY_FETCH_QUERY, CITY_FETCH_SEARCH } from '@/constants/actionTypes'
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
})(QueryCity)

function QueryCity (props) {
  const [sea, setSea] = useState(true)
  const [his, setHis] = useState(false)
  const { data, onlyCity, history, match, queryData, searchData, historyData } = props
  const { id } = match.params
  const queryVal = useRef()
  const clk = () => {
    searchData({ keyword: queryVal.current.value, city_id: id})
    setSea(false)
    setHis(true)
  }
  const jump = (metadata) => {
    history.push('/dist/home')
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

          {historyData.length > 0 ? <p className="empty">清空所有</p> : null}
        </div>
      </div>
    </div>
  )
}
