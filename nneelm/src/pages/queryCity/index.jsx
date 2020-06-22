/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CITY_FETCH_QUERY } from '@/constants/actionTypes'
import queryCityAction from '@/actions/queryCity'
import str from '@/utils/string'
import { Header } from '@@'
import './styles.less'

export default connect(({ queryCity }) => ({
  queryData: queryCity.queryData
}), {
  onlyCity: queryCityAction[str(CITY_FETCH_QUERY)],
})(QueryCity)

function QueryCity (props) {
  const { onlyCity, match, queryData } = props
  const { id } = match.params
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
        <div><input type="text"/></div>
        <div><button>提交</button></div>
      </div>
    </div>
  )
}
