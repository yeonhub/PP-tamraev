import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";

const Footer = () => {
  const FooterContainer = styled.footer`
    width: 100%;
    text-align: center;
    padding: 60px 0;
    background: #303030;

    .logo {
      opacity: 1;
    }

    .footer_menu {
      position: relative;
      margin-top: 36px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        display: block;
        width: 100%;
        height: 1px;
        background: #474747;
      }

      li {
        position: relative;
        display: inline-block;
        padding: 0 20px;
        background: #303030;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          display: block;
          width: 3px;
          height: 3px;
          margin-top: -2px;
          background: #989898;
        }
      }

      li:first-child::before {
        display: none;
      }

      a {
        opacity: 0.5;
        color: #fff;
        font-family: 'ht_r';
        font-size: 18px;
      }
    }

    .copyright {
      display: block;
      color: #707070;
      font-family: 'ht_r';
      font-size: 14px;
      margin-top: 40px;
    }
  `;

  return (
    <FooterContainer>
      <div className="inner">
        <p className="logo">
          <img src="./img/logo.png" alt="탐라는 전기차" />
        </p>
        <ul className="footer_menu">
          <li>
            <Link to={'/'}>탐라는 전기차</Link>
          </li>
          <li>
          <Link to={"https://yeonhub.github.io/TP-EZtour_vanillaJS/"} target="_blank">이젠제주투어</Link>
          </li>
          <li>
            <Link to={'/noticeList'} >JEJU 전기차 관련 소식</Link>
          </li>
          <li>
            <Link to={'/terms'}>이용약관</Link>
          </li>
          <li>
            <Link to={'/privacy'} >개인정보처리방침</Link>
          </li>
        </ul>
        <div className='copyright'>
          COPYRIGHT ⓒ All rights RESERVED.
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
