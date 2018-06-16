import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import LoadingInfo from 'component/common/LoadingInfo'
const params = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination'
  }
};
    export default class Carousel extends Component {
      render() {
        let{state,props}=this
        return (props.data.status==1?(
          <Swiper {...params}>
          {props.data.content.map((v,k)=><div className="flexBox" key={k}><img src={`${v.picUrl}?param=400y170`}  alt="每日推荐"/></div>)}
          </Swiper>
        ):<LoadingInfo status={0} />)
      }
    }