import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const slideAnimation = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const HeaderContainer = styled.div`
header {
  z-index: 10000;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;

  .inner {
    position: relative;
    left: 50%;
    top: 0;
    width: 1200px;
    color: #fff;
    padding: 34px 0;
    margin-left: -600px;
  }

  h1 {
    font-size: 0;
  }

  .btn_total {
    z-index: 11;
    position: absolute;
    right: 0;
    top: 34px;
    width: 30px;
    height: 21px;
    font-size: 0;

    i {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 3px;
      background: #fff;
      transition: all 0.3s ease;
    }
  }

  &.blue .btn_total i {
    background: #002c5f;
  }

  .btn_total i {
    &:nth-child(2) {
      top: 9px;
    }

    &:nth-child(3) {
      top: 18px;
    }
  }

  .total_menu {
    position: absolute;
    left: 0;
    top: -700px;
    width: 100%;
    height: 700px;
    background: #fff;
    transition: all 0.5s ease;

    &::before {
      content: '';
      position: fixed;
      left: 0;
      top: 0;
      display: none;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
    }

    .gnb_img_slider {
      overflow: hidden;
      z-index: 10;
      float: left;
      width: 50%;
      height: 700px;
      background: #fff;

      .items {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
        height: 700px;
        outline: 0;

        img {
          position: absolute;
          left: 50%;
          top: 0;
          margin-left: -480px;
          transition: all 5s ease;
          transform: scale(1.1);
        }

        &.first img {
          transform: scale(1.1);
          animation: mainSlider 5s forwards ease;
        }

        &.slick-active img {
          transform: scale(1);
        }
      }
    }

    .gnb_menu {
      z-index: 10;
      position: relative;
      float: right;
      width: 50%;
      height: 700px;
      padding-top: 87px;
      padding-left: 140px;
      background: #fff;

      ul li {
        width: 460px;
        padding: 40px 0 38px;
        border-top: 1px solid #e5e5e5;

        &:first-child {
          border-top: 0;
        }

        a {
          position: relative;
          color: #000;
          font-family: 'hh_l';
          font-size: 40px;
          padding-left: 20px;

          &::before {
            opacity: 0;
            content: '';
            position: absolute;
            left: 0;
            top: 20px;
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #007fa8;
            transition: top 0.5s ease-out;
          }

          &.on, &:hover {
            font-family: 'hh_m';
            font-weight: 700;
          }

          &.on::before, &:hover::before {
            opacity: 1;
            top: 0px;
          }
        }
      }
    }
  }

  &.total_open {
    .total_menu {
      top: 0;

      &::before {
      top: 0;
      display: block;

      }
    }

    .btn_total {
      i {
        background: #000;

        &:nth-child(1) {
          top: 50%;
          margin-top: -1.5px;
          transform: rotate(-45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          top: 50%;
          margin-top: -1.5px;
          transform: rotate(45deg);
        }
      }

      &:hover i {
        transform: rotate(0);
      }
    }
  }
}

@keyframes mainSlider {
  from {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);
  }
}


`;

import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Header = () => {
  const location = useLocation();
  const headerClass = location.pathname === '/' ? '' : 'blue';
  const logoClass = location.pathname === '/' ? '' : '_b';

  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => {
    setIsOpen(!isOpen)
    !isOpen ? document.body.classList.add('overflow') : document.body.classList.remove('overflow');
  }
  const [onPage, setOnPage] = useState('/')

  useEffect(() => {
    setIsOpen(false)
    setOnPage(location.pathname)
  }, [location])

  return (
    <HeaderContainer>
      <header className={`${headerClass} ${isOpen ? 'total_open' : ''}`}>
        <div className="inner">
          <h1>
            <Link to='/'>
              <img src={`./img/logo${logoClass}.png`} alt="탐라는 전기차" />
            </Link>
          </h1>
          <a style={{ cursor: "pointer" }}
            className="btn_total"
            onClick={onOpen}
          >
            메뉴열기<i></i><i></i><i></i>
          </a>
        </div>

        <div className='total_menu'>
          <div className="gnb_img_slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <img src="./img/gnb_slider_1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/gnb_slider_2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/gnb_slider_3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/gnb_slider_4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/gnb_slider_5.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/gnb_slider_6.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="gnb_menu">
            <ul>
              <li>
                <Link className={onPage === '/' ? "on" : ''} to={"/"}> HOME</Link>
              </li>
              <li>
                <Link className={onPage === '/info' ? "on" : ''} to={'/info'}> 탐라는 전기차</Link>
              </li>
              <li>
                <Link className={onPage === '/electronicList' ? "on" : ''} to={"https://yeonhub.github.io/TP-EZtour_vanillaJS/"} target="_blank"> 이젠제주투어</Link>
              </li>
              <li>
                <Link className={onPage === '/noticeList' ? "on" : ''} to={'/noticeList'}> JEJU 전기차 관련 소식</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;