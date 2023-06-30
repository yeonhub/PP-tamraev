import React from 'react';
import styled from 'styled-components';


const ContainerPopup = styled.div`
#layer_news{

  display: flex;
  width: 1200px;
    height: 720px;
    z-index: 1000000;
    position: absolute;
    position: fixed;
    left: 50%;
    background: #fff;
    top: 50%;
    transform: translate(-50%,-50%);

    .swiperBox {
      width: 720px;
      height: 720px;
    }

    .swiperimg {
      width: 720px;
      height: 720px;
    }

    .content_area {
      position: relative;
      float: right;
      width: 480px;
      height: 720px;
      padding: 60px 70px 70px;
      background: #e4dcd3;

      .tit1 {
        color: #007fa8;
        font-family: 'hh_r';
        font-size: 21px;
      }

      .tit2 {
        color: #000;
        font-family: 'hh_m';
        font-size: 40px;
        margin-top: 5px;
      }

      .icon_like {
        button {
          display: inline-block;
          width: 68px;
          height: 76px;
          font-size: 0;
          margin-left: -12px;
          vertical-align: middle;
          /* background: url(../img/main/icon_heart_68x76_f33.png) no-repeat; */
          outline: none;

          &.play {
            animation: like_seq 1s forwards steps(32);

            &.stop {
              animation: none;
              background-position: -2176px 0;
            }
          }
        }

        .count {
          display: inline-block;
          color: #626262;
          font-family: 'ht_r';
          font-size: 17px;
          vertical-align: middle;
          padding-top: 15px;
        }
      }

      .sns_share {
        position: absolute;
        left: 70px;
        right: 70px;
        bottom: 70px;

        .tag {
          overflow: hidden;
          margin-left: -16px;

          span {
            display: inline-block;
            color: #626262;
            font-family: 'ht_r';
            font-size: 16px;
            margin-left: 16px;
            margin-top: 10px;
          }
        }

        .btn_area {
          position: relative;
          font-size: 0;
          text-align: right;
          margin-top: 37px;
          padding-top: 20px;
          border-top: 1px solid #c3bdb6;

          .tit {
            position: absolute;
            left: 0;
            top: 20px;
            color: #626262;
            font-family: 'ht_r';
            font-size: 16px;

            img {
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
            }
          }

          a {
            display: inline-block;
            margin: 0 4px;
          }
        }
      }
    }
.btn_close {
  position: absolute;
  right: 20px;
  top: 20px;
  display: block;
  width: 32px;
  height: 32px;
  text-indent: -999px;
  font-size: 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    transform: rotate(90deg);
  }
}

  }

@keyframes like_seq {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -2176px 0;
  }
}
`
const ContainerPopupBg = styled.div`
    z-index: 100000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
`

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Popup = ({ currentData, offPop }) => {
  const { images, inner } = currentData
  console.log(inner);
  return (
    <>
      <ContainerPopup>
        <div id='layer_news'>
          <div className="swiperBox">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={true}
            >
              {
                images.map((item, idx) =>
                  <SwiperSlide><img key={idx} src={item.img} className='swiperimg' alt="" /></SwiperSlide>
                )
              }
            </Swiper>
          </div>
          <div dangerouslySetInnerHTML={{ __html: inner }} />
          <a className="btn_close" onClick={offPop}></a>
        </div>
      </ContainerPopup>
      <ContainerPopupBg />
    </>
  );
};

export default Popup;