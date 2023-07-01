import React from 'react';
import styled from 'styled-components';

/* 공통 */


const ContainerNotice = styled.div`
    .inner {

    .notice_list {
      margin-top: 45px;
      border-bottom: 1px solid #000;

      table {
        table-layout: fixed;

        thead th {
          height: 46px;
          line-height: 46px;
          color: #000;
          font-family: 'ht_m';
          font-size: 16px;
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
        }

        tbody td {
          color: #626262;
          font-size: 18px;
          text-align: center;
          border-top: 1px solid #d8d5d5;
          padding: 37px 10px 37px;

          a {
            overflow: hidden;
            display: block;
            width: 100%;
            color: #626262;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;

            &:hover {
              /*text-decoration:underline*/
            }
          }

          &.subject {
            text-align: left;
            letter-spacing: -1px;
          }

          strong {
            color: #000;

            &.noti {
              color: #007fa8;
            }
          }
        }
      }
    }

    .paginate {
      text-align: center;
      margin-top: 41px;
      margin-bottom: 105px;

      a {
        display: inline-block;
        width: 46px;
        height: 46px;
        font-size: 0;
        vertical-align: middle;
      }

      ol {
        display: inline-block;

        li {
          display: inline-block;
        }

        a {
          color: #626262;
          font-size: 18px;
          line-height: 46px;
          letter-spacing: 0.015em;
        }
      }

      a.on {
        color: #007fa8;
        font-family: 'ht_b';
      }

      .btn_prev {
        background: url('./img/noti/btn_arrow_prev.png') 50% 50% no-repeat;
      }

      .btn_next {
        background: url('./img/noti/btn_arrow_next.png') 50% 50% no-repeat;
      }

      .btn_prev_2 {
        background: url('./img/noti/btn_arrow_prev2.png') 50% 50% no-repeat;
      }

      .btn_next_2 {
        background: url('./img/noti/btn_arrow_next2.png') 50% 50% no-repeat;
      }
    }
  }
`

import noticeData from '../assets/api/notice'
import { Link } from 'react-router-dom';

const Noticelist = () => {
  return (
    <ContainerNotice>
      <div id="container">
        <div className="inner">
          <div className="notice_list">
            <table>
              <caption>NO, 제목, 작성일, 조회수에 대한 내용</caption>
              <colgroup>
                <col style={{ width: '13%' }} />
                <col />
                <col style={{ width: '13%' }} />
                <col style={{ width: '13%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>제목</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody id="board_list">
                {
                  	oticeData.sort((a, b) => b.id - a.id).map(item =>
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td className='subject'>
                        <strong><Link to={`/noticeList/${item.id}`}>{item.title}</Link></strong></td>
                      <td>{item.date}</td>
                      <td>{item.view}</td>
                    </tr>
                  )
                }

              </tbody>
            </table>
          </div>

          <div className="paginate" id="board_paging">
            <a className='btn_prev_2 disable' href=""></a>
            <a className='btn_prev disable' href=""></a>
            <ol>
              <li><a href="" className='on'>1</a></li>
            </ol>
            <a className='btn_next disable' href=""></a>
            <a className='btn_next_2 disable' href=""></a>
          </div>
        </div>
      </div>
    </ContainerNotice>
  );
};

export default Noticelist;
