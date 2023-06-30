import React from 'react';
import Noticelist from './NoticeList';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ContainerNoticeLayout = styled.div`
 #container {
      position: relative;
  
      /* min-height: 350px; */
  
      .inner {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding-top: 123px;
  
      }
  
      h3 {
        font-size: 40px;
        line-height: 68px;
        font-family: 'hh_r';
        text-align: center;
      }
  
      p.sub_tit {
        font-size: 18px;
        line-height: 30px;
        color: #666;
        text-align: center;
      }}
`

const NoticeLayout = () => {
    return (
        <ContainerNoticeLayout>
            <div id="container">
                <div className="inner">
                    <h3>JEJU 전기차 관련 소식</h3>
                    <p className="sub_tit">제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
                    <Outlet />
                </div>
            </div>
        </ContainerNoticeLayout>
    );
};

export default NoticeLayout;