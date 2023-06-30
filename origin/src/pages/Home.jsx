import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
h1 a {
  display: block;
  width: 163px;
  height: 42px;
  background: url(./img/logo.png) no-repeat;

  img {
    display: none;
  }
}

.main_key_visual {
  position: relative;
  width: 100%;

  .main_title {
    z-index: 9999;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 180px;
    width: 500px;
    margin-left: -600px;

    h2 {
      display: inline-block;
      color: #fff;
      font-family: 'hh_m';
      font-size: 56px;
    }

    h3 {
      display: inline-block;
      color: #fff;
      font-family: 'ht_m';
      font-size: 21px;
      line-height: 35px;
      margin-top: 20px;
    }
  }

  .arrow {
    z-index: 9999;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 32px;
    height: 20px;
    margin-left: -16px;
    background: url(./img/main/main_slider_arrow.png) no-repeat;

    &:before {
      content: '';
      position: absolute;
      left: 100%;
      bottom: 0;
      display: block;
      width: 1920px;
      height: 20px;
      background: #fff;
    }

    &:after {
      content: '';
      position: absolute;
      left: 100%;
      bottom: 0;
      display: block;
      width: 1920px;
      height: 20px;
      background: #fff;
      left: auto;
      right: 100%;
    }
  }
  .swiper-slide-active {
    position: relative;
    z-index: 999;
  }
  #ani {
    animation: mainSlider 10s;
  }
}
@keyframes mainSlider {
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.2);
  }
}

.contents {
  width: 1200px;
  margin: 35px auto 0;
  padding-bottom: 100px;


  h4 {
    font-family: 'hh_m';
    font-size: 45px;
    text-align: center;
  }

  .category_menu {
    position: relative;
    margin-top: 40px;
    border-top: 1px solid #e4dcd3;
    border-bottom: 1px solid #e4dcd3;

    > ul {
      font-size: 0;

      > li {
        display: inline-block;
        padding: 0 22px;
        cursor: pointer;
        color: #000;

        .menu_select {
          display: block;
          height: 60px;
          color: #666;
          font-family: 'hh_r';
          font-size: 16px;
          padding-top: 20px;

          &.on, &:hover {
            color: #007fa8;
          }
        }
      }
    }

    .line {
      position: absolute;
      left: 0;
      top: 57px;
      width: 0;
      height: 3px;
      background: #007fa8;
      transition: all 0.5s ease-out;
    }

    .btn_search {
      position: absolute;
      right: 0;
      top: 10px;
      width: 90px;
      height: 40px;
      color: #666;
      font-family: 'hh_r';
      font-size: 16px;
      text-align: left;
      border-radius: 20px;
      padding-left: 44px;
      background: #e4dcd3 url(./img/main/btn_search.png) 18px 50% no-repeat;

      span {
        display: none;
      }

      &.on {
        background: #e4dcd3 url(./img/main/btn_search_close.png) 20px 50% no-repeat;
        font-size: 0;

        span {
          display: block;
          font-size: 16px;
        }
      }
    }

    .search_box {
      display: block;
      z-index: 10;
      position: relative;
      left: 0;
      top: 100%;
      width: 100%;
      font-size: 0;
      text-align: center;
      background: #e4dcd3;
      height: 0;
      box-sizing: border-box;
      transition: 0.5s;
      overflow: hidden;

      .input_box {
        position: relative;
        display: inline-block;

        input {
          width: 640px;
          height: 60px;
          font-family: 'ht_r';
          font-size: 21px;
          padding: 0 40px 0 24px;
          outline: 0;
        }

        .btn_clear {
          display: none;
          position: absolute;
          right: 25px;
          top: 50%;
          width: 12px;
          height: 12px;
          font-size: 0;
          margin-top: -6px;
          background: url(./img/main/btn_clear.png) no-repeat;
        }

        .rec_list {
          display: none;
          position: absolute;
          left: -2px;
          right: -2px;
          top: 100%;
          text-align: left;
          border: 2px solid #e4dcd3;
          background: #fff;

          li a {
            display: block;
            width: 100%;
            color: #000;
            font-family: 'ht_r';
            font-size: 17px;
            padding: 15px 24px 20px;

            &:hover {
              background: #f6f3f2;
            }

            span {
              color: #007fa8;
            }
          }
        }
      }

      .btn_search_result {
        display: inline-block;
        width: 60px;
        height: 60px;
        font-size: 0;
        vertical-align: top;
        background: #007fa8 url(./img/main/btn_search_result.png) center center no-repeat;
      }
      &.on {
        height: 150px;
        padding: 45px 0;
      }
    }
  }

  .total_count {
    display: none;
    color: #666;
    font-family: 'hh_r';
    font-size: 18px;
    padding: 10px 0;
  }

  .contents_list {
    margin-top: 50px;


    #card_list {
      overflow: hidden;
      font-size: 0;
      margin-left: -24px;
      height: 400px;
    }

    li {
      overflow: hidden;
      display: inline-block;
      width: 384px;
      height: 384px;
      margin: 0 0 24px 24px;

      img {
        width: 100%;
        min-height: 384px;
      }
    }
  }

  .btn_more {
    position: relative;
    display: block;
    width: 50px;
    font-family: 'hh_r';
    font-size: 16px;
    margin: 40px auto 0;
    padding-top: 40px;

    &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 0;
    }

    &:before {
      width: 2px;
      height: 32px;
      margin-left: -1px;
      background: #000;
    }

    &:after {
      top: 15px;
      width: 32px;
      height: 2px;
      margin-left: -16px;
      background: #000;
    }
  }
}

/* .contents .contents_list li a:hover img {transform: scale(1.05);}  */

`
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import mainData from '../assets/api/main'
import Popup from '../components/Popup';

const Home = () => {
  const [isSearch, setIsSearch] = useState(false)
  const onSearch = () => {
    setIsSearch(!isSearch)
  }
  const [isPop, setIsPop] = useState(false)
  const [currentData, setCurrentData] = useState('')
  const onPop = id => {
    setIsPop(true)
    setCurrentData(mainData.find(item => item.id === id))
  }
  const offPop = () => {
    setIsPop(false)
  }
  const [cardListHeight, setCardListHeight] = useState(400);
  const onMore = () => {
    if (cardListHeight !== 1600) {
      setCardListHeight((prevHeight) => prevHeight + 400);
    }
  };
  const [showData, setShowData] = useState(mainData)
  const onTpye = (type) => {
    type === 'all' ? setShowData(mainData) : setShowData(mainData.filter(item => item.type === type))
  }
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return
    const filteredData = mainData.filter(item => item.inner.includes(text));
    setShowData(filteredData);
    setText('');
  }
  const changeInput = (e) => {
    setText(e.target.value)
  }
  const onAni = 'ani'
  const [active, setActive] = useState(true)
  useEffect(() => {
    const onAni = 'ani'
  }, [active])

  return (
    <>
      <Container id="container">
        <div className="main_key_visual">
          <div className="main_slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => setActive(!active)}
            >
              <SwiperSlide id={onAni}><img src="./img/main/main_slider_1.jpg" alt="" /></SwiperSlide>
              <SwiperSlide id={onAni}><img src="./img/main/main_slider_2.jpg" alt="" /></SwiperSlide>
              <SwiperSlide id={onAni}><img src="./img/main/main_slider_3.jpg" alt="" /></SwiperSlide>
            </Swiper>
          </div>
          <div className="main_title">
            <h2>탐라는 전기차</h2><br />
            <h3>전기차와 함께 제주 여행을 준비하는 당신에게<br />필요한 모든 정보와 꿀팁!</h3>
          </div>
          <span className="arrow"></span>
        </div>
        <div className="contents">
          <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
          <div className="category_menu">
            <ul>
              <li><Link className="menu_select" data-id="ALL" onClick={() => onTpye('all')}>인기 콘텐츠</Link></li>
              <li><Link className="menu_select" data-id="A" onClick={() => onTpye('info')}>전기차 소개</Link></li>
              <li><Link className="menu_select" data-id="B" onClick={() => onTpye('trip')}>슬기로운 전기차 여행</Link></li>
              <li><Link className="menu_select" data-id="C" onClick={() => onTpye('service')}>충전 및 문제 대처법</Link></li>
              <li><Link className="menu_select" data-id="D" onClick={() => onTpye('qna')}>FAQ</Link></li>
              <li><Link className="menu_select" data-id="E" to={"https://yeonhub.github.io/TP-EZtour_vanillaJS/"} target="_blank">이젠제주투어 </Link></li>
              <li><Link className="menu_select" data-id="F" to={'/noticeList'}>제주 전기차 뉴스</Link></li>
            </ul>
            <span className="line"></span>
            <button className={isSearch ? "btn_search on" : "btn_search"} onClick={onSearch}>검색<span>닫기</span></button>
            <div className={isSearch ? "search_box on" : "search_box"}>
              <div className="input_box">
                <form onSubmit={onSubmit}>
                  <input type="text" id="searchTxt" value={text} onChange={changeInput} placeholder="검색어를 입력해주세요." />
                </form>
                <button className="btn_clear">검색초기화</button>
              </div>
              <button className="btn_search_result" id="searchButton">검색하기</button>
            </div>
          </div>
          <div className="contents_list">
            <p className="total_count">검색결과 (<span>999</span>)</p>
            <ul id="card_list" style={{ overflow: 'hidden', fontSize: 0, marginLeft: '-24px', height: `${cardListHeight}px` }}>
              {
                showData.map(item => <li key={item.id} onClick={() => onPop(item.id)}><img src={item.thumbnail} alt="" /></li>)
              }
            </ul>

          </div>

          <button className="btn_more" onClick={onMore}>더보기</button>
        </div>
      </Container>
      {
        isPop ? <Popup currentData={currentData} offPop={offPop} /> : null
      }
    </>
  );

};

export default Home;