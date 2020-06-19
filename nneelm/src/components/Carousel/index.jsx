import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './styles.less'

export default function Carousel () {

  useEffect(() => {
    new Swiper('.swiper-container', {
      loop : true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }, [])

  return (
    <div className="swiper-container">
    <div className="swiper-wrapper">
      <div className="swiper-slide"><img src="1.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="2.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="1.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="2.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="1.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="2.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="1.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="2.jpg" alt=""/></div>
      <div className="swiper-slide"><img src="1.jpg" alt=""/></div>
    </div>
    <div className="swiper-pagination"></div>
  </div>
  )
}
