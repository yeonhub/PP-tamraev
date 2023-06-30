import React from 'react';
import noticeData from '../assets/api/notice'
import { useNavigate, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ContainerNoticeDetail = styled.div`

    .inner {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      padding-top: 123px;

    .notice_view {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      padding-top: 30px;
      padding-bottom: 73px;
      margin-top: 65px;

      .sw {

        img {
          width: 100%;
          height: 1000px;
        }
      }

      h4 {
        font-family: 'hh_r';
        font-size: 30px;
        line-height: 1;
        text-align: center;
        margin-bottom: 13px;
      }

      p {
        &.date {
          color: #666;
          font-size: 15px;
          line-height: 1;
          text-align: center;
          padding-bottom: 30px;
          border-bottom: 1px solid #d8d5d5;
        }

        &.view_sub {
          text-align: left;
          padding-top: 43px;
          font-size: 18px;
          line-height: 30px;
          color: #666;
        }
      }
    }

      .paginate {
        text-align: center;
        margin-top: 50px;
        overflow: hidden;
        margin-bottom: 120px;
  
        a {
          display: inline-block;
          width: 100px;
          height: 46px;
          font-size: 20px;
          vertical-align: middle;
          color : black;
  
          &.btn_prev::before {
            content: '';
            background: url('./img/noti/btn_arrow_prev.png') no-repeat;
            width: 8px;
            height: 13px;
            position: absolute;
            left: 0;
            top: 19px;
          }
  
          &.btn_list {
            padding: 0 70px;
            font-size: 18px;
            line-height: 55px;
            height: 55px;
            color: #fff;
            font-family: 'hh_b';
            background: #002c5f;
            display: inline-block;
            width: auto;
          }
  
          &.btn_next::after {
            content: '';
            background: url('./img/noti/btn_arrow_next.png') no-repeat;
            width: 8px;
            height: 13px;
            position: absolute;
            right: 0;
            top: 19px;
          }
  
          &.btn_prev, &.btn_next {
            font-size: 18px;
            color: #000;
            width: auto;
            font-family: 'hh_r';
            padding-right: 20px;
            position: relative;
            background-image: none;
            padding-top: 14px;
            vertical-align: top;
          }
  
  
          &.btn_prev {
            padding-left: 20px;
            float: left;
            padding-right: 0;
          }
  
          &.btn_next {
            float: right;
          }
        }
      }
    }

 `


const NoticeDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate()

  const currentItem = noticeData.find(item => item.id === parseInt(id));
  if (!currentItem) {
    return <p className='notfind' style={{ textAlign: 'center', margin: 200, fontSize: 50 }}>해당 공지사항을 찾을 수 없습니다.</p>;
  }
  const { title, date, txt, images } = currentItem

  return (
    <ContainerNoticeDetail>
      <div id="container">
        <div className="inner">
          <div className="notice_view">
            <h4 class="view_tit">{title}</h4>
            <p class="date">{date}</p>
            <div className='sw'>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {
                  images.map((item, idx) => <SwiperSlide key={idx}><img src={item.img} alt="" /></SwiperSlide>)
                }

              </Swiper>
            </div>
            <p className="view_sub">{txt.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}</p>
          </div>
          <div className="paginate">
            <Link className="btn_prev" to={Number(id) === 1 ? `/noticeList/${Number(id)}` : `/noticeList/${Number(id) - 1}`} >이전글</Link>

            <Link to="/noticeList" className="btn_list">목록보기</Link>

            <Link className="btn_next" to={Number(id) === noticeData.length ? `/noticeList/${Number(id)}` : `/noticeList/${Number(id) + 1}`} >다음글</Link>
          </div>
        </div>
      </div>
    </ContainerNoticeDetail>
  );
};

export default NoticeDetail;