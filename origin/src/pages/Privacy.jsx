import React from 'react';
import styled from 'styled-components';



const ContainerPrivacy = styled.div`
#container .inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  min-height: 800px;
}

.terms_frm {
  padding: 132px 0 120px;

  .tit_box {
    text-align: center;
  }

  .txt_box .bg_box {
    background: #f6f3f2;
    padding: 60px 45px 60px 60px;
    margin-top: 8px;
  }
}

&.privacy .terms_frm .txt_box .bg_box p {
  &.type_0 {
    color: #666;
    font-size: 18px;
    line-height: 30px;
  }

  &.type_1 {
    color: #666;
    font-size: 18px;
    line-height: 30px;
    margin-top: 10px;
  }

  &.type_2 {
    color: #000;
    font-size: 18px;
    line-height: 30px;
    margin-top: 15px;
  }

  &.type_3 {
    color: #666;
    font-size: 18px;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.terms_frm {
  .txt_box .bg_box:first-child {
    margin-top: 0px;
  }

  .tit_box {
    h2 {
      color: #000;
      font-family: 'hh_r';
      font-size: 40px;
      margin-top: 100px;
    }

    &:first-child h2 {
      margin-top: 0;
    }

    p {
      color: #666;
      font-family: 'ht_r';
      font-size: 14px;
      line-height: 21px;
      margin-top: 15px;

      &.info_txt {
        color: #000;
        font-size: 14px;
        line-height: 21px;
        margin-top: 25px;

        span {
          font-family: 'ht_b';
        }
      }
    }
  }

  .txt_box {
    margin-top: 61px;

    h3 {
      margin-top: 50px;
      font-family: 'hh_r';
      font-size: 30px;

      &:first-child {
        margin-top: 0px;
      }
    }

    p.tit {
      margin-top: 20px;
      font-family: 'hh_r';
      font-size: 20px;
    }
  }
}

&.privacy .terms_frm .txt_box p.tit {
  margin-top: 20px;
  font-family: 'hh_m';
  font-size: 21px;
}

.terms_frm .txt_box ul {
  margin-top: 18px;
}

&.privacy .terms_frm .txt_box ul.no_mar {
  margin-top: 0px;
}

.terms_frm {
  .txt_box ul li {
    color: #666;
    font-family: 'ht_r';
    font-size: 18px;
    line-height: 30px;
    text-indent: -24px;
    padding-left: 24px;

    &.indent {
      padding-left: 24px;
      text-indent: 0;
    }

    &.no_indent {
      padding-left: 0;
      text-indent: 0;
    }

    &.mr_bt {
      margin-bottom: 30px;
    }
  }

  table {
    margin: 10px 0;
    border-top: 1px solid #222;
    border-right: 1px solid #222;

    th {
      font-family: 'hh_m';
      font-size: 18px;
      line-height: 25px;
      font-weight: normal;
      text-align: center;
      text-indent: 0;
      padding: 10px;
      border-left: 1px solid #222;
      border-bottom: 1px solid #222;
    }

    td {
      font-family: 'hh_r';
      font-size: 16px;
      line-height: 25px;
      text-indent: 0;
      padding: 10px;
      border-left: 1px solid #222;
      border-bottom: 1px solid #222;
      vertical-align: top;
    }
  }
}

`

const Privacy = () => {
    return (
        <ContainerPrivacy>
            <div id="container">
                <div className="inner">
                    <div className="terms_frm">
                        <div className="tit_box">
                            <h2>개인정보 처리방침</h2>
                        </div>

                        <div className="txt_box">
                            <div className="bg_box">
                                <p className="tit">1. 총칙</p>
                                <p className="type_1">현대자동차 주식회사(이하 ‘회사’라고 합니다)는 ‘탐라는 전기차’서비스를 제공함에 있어서 ｢개인정보 보호법｣ 제30조에 따라 고객님의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>

                                <p className="tit">2. 개인정보의 처리 목적, 항목 및 보유기간</p>
                                <ul>
                                    <li>
                                        1) 회사는 다음의 목적을 위하여 아래와 같이 개인정보 항목을 처리하고 있습니다.
                                        법령에 따른 개인정보 보유 및 이용기간 또는 고객님으로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도 로는 이용되지 않으며, 이용 목적, 항목이 변경되는 경우에는 ｢개인정보 보호법｣ 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

                                        <table>
                                            <colgroup>
                                                <col style={{width:"20%" }}/>
                                                <col/>"
                                                <col style={{width:"20%" }}/>
                                                <col style={{width:"20%" }}/>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>서비스 구분</th>
                                                    <th>수집·이용 목적</th>
                                                    <th>수집항목</th>
                                                    <th>보유기간</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>전기차충전소 검색</td>
                                                    <td>위치정보에 기반한 충전소 찾기 기능 제공을 위함</td>
                                                    <td>IP 주소, 단말기의 GPS 정보 등</td>
                                                    <td>서비스 이용 종료 후 즉시파기</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                </ul>

                                <p className="tit">3. 개인정보의 파기절차 및 파기방법</p>
                                <ul>
                                    <li>1) 회사는 다른 법률에 따라 개인정보를 보존하여야 하는 경우가 아닌 한, 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</li>
                                    <li>2) 고객님으로부터 동의받은 개인정보 보유기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 의한 근거 및 내부 방침 및 정보보호 사유(보유 및 이용기간 참조)에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여(종이의 경우 별도의 서류함) 보존합니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 목적 이외의 다른 목적으로 이용되지 않습니다.</li>
                                    <li>
                                        3) 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                                        ① 파기절차
                                        회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                                        ② 파기방법
                                        회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                                    </li>
                                </ul>

                                <p className="tit">4. 개인정보 처리의 위탁</p>
                                <ul>
                                    <li>
                                        1) 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

                                        <table>
                                            <colgroup>
                                                <col style={{width:"20%" }}/>
                                                <col style={{width:"20%" }}/>
                                                <col style={{}}/>"
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>서비스 구분</th>
                                                    <th>수탁사</th>
                                                    <th>위탁 업무 내용</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>시스템운영</td>
                                                    <td>이노션㈜, 더브리즈</td>
                                                    <td>탐라는 전기차 전산 시스템 운영 및 유지보수</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>2) 회사는 위탁계약 체결 시 ｢개인정보 보호법｣ 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</li>
                                    <li>3) 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</li>
                                </ul>

                                <p className="tit">5. 개인정보의 제3자 제공</p>
                                <ul>
                                    <li>1) 회사는 고객의 개인정보를 제3자에게 제공하지 않습니다.</li>
                                </ul>

                                <p className="tit">6. 개인정보의 안전성 확보조치</p>
                                <p className="type_1">
                                    ※ 개인정보의 기술적/관리적 보호 대책
                                    회사는 고객의 개인정보를 처리함에 있어 개인정보의 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 아래와 같은 기술적/관리적 대책을 적용하고 있습니다.
                                </p>
                                <ul>
                                    <li>
                                        <p className="type_2">1) 기술적 조치</p>
                                        ① 고객정보의 암호화
                                        소중한 고객의 개인정보는 DB내에 암호화되어 저장되어 외부 침입에 의해 유출되더라도 고객의 개인정보를 활용할 수 없도록 하고 있습니다.

                                        ② 통신 구간 암호화
                                        고객이 홈페이지를 통한 회원가입 및 로그인 시 고객정보를 입력하여 전달하는 구간에 대해 SSL을 통해 고객의 정보가 안전하게 전송되도록 조치하고 있습니다.

                                        ③ 보안솔루션의 설치
                                        서비스 제공 및 고객의 정보를 안전하게 관리하기 위하여 개인정보처리시스템에 대해 백신프로그램의 설치, 주기적인 업데이트 및 정기점검을 수행하고 있으며, DB암호화 솔루션 및 화면캡처방지 솔루션을 적용하고 있습니다. 또한 해킹 등의 외부침입을 대비하여 침입차단/탐지시스템을 설치하고 통합보안관제센터를 통해 해킹 및 외부침입에 대비하여 계속적으로 모니터링을 수행하고 있습니다.
                                    </li>
                                    <li>
                                        <p className="type_2">2) 관리적 조치</p>
                                        ① 개인정보관리체계 수립
                                        개인정보를 안전하게 관리하기 위하여 회사 내부적으로 개인정보 관리체계를 수립하여 운영하고 있습니다.

                                        ② 개인정보보호 위원회 운영
                                        회사의 개인정보보호를 위한 위원회를 구성하여 연 2회 이상 위원회 회의를 개최하고 개인정보관리체계의 운영 및 개인정보보호 이슈 등의 사항에 대하여 개선하고 바로잡기 위한 노력을 기울이고 있습니다.

                                        ③ 개인정보 취급자 관리
                                        고객의 개인정보를 처리하는 개인정보취급자를 대상으로 개인정보보호 서약서를 제출 받고, 연2회 이상의 개인정보보호 교육을 수행하여 고객정보의 중요성과 안전하게 관리하도록 하고 있습니다. 또한 개인정보처리자의 권한 관리를 통하여 불필요한 고객의 개인정보에 대한 접근과 노출을 최소화하고 있습니다.
                                    </li>
                                </ul>

                                <p className="tit">7. 개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항</p>
                                <ul>
                                    <li>1) 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</li>
                                    <li>
                                        2) 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
                                        ① 쿠키의 사용목적: 홈페이지 접속빈도 및 방문시간 분석, 고객의 관심분야 파악 및 분석, 각종 이벤트 참여 및 방문횟수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공을 위해 쿠키 등을 사용합니다. 고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 고객은 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.

                                        ② 쿠키의 설치∙운영 및 거부: 쿠키 설정을 거부하는 방법으로는 고객이 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
                                    ※ 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의도구 - 인터넷옵션 - 개인정보 - 고급 - 설정방법 선택

                                        ③ 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부 서비스는 이용에 어려움이 있을 수 있습니다.
                                    </li>
                                </ul>

                                <p className="tit">8. 고객, 법정대리인의 권리와 의무 및 그 행사방법</p>
                                <ul>
                                    <li>1) 고객 또는 법정대리인(만 14세 미만의 아동인 경우)은 회사에 대하여 언제든지 개인정보 수집 · 이용 · 제공 등의 동의를 철회(가입해지)할 수 있으며 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
                                    <li>2) 고객 또는 법정대리인은 위와 같은 권리 행사를 온라인에서는 회사 홈페이지에 접속하여 본인 확인 절차를 거친 후 개인정보관리 메뉴에서 하실 수 있고, 서면, 전화 또는 이메일 등을 통하여 고객센터 또는 회사 개인정보보호팀 책임자 및 담당자에게 연락하는 방법으로 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.</li>
                                    <li>3) 제1, 2항에 따른 권리 행사는 고객님의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</li>
                                    <li>4) 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조제2항에 의하여 고객님의 권리가 제한될 수 있습니다.</li>
                                    <li>5) 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</li>
                                    <li>6) 회사는 정보주체 권리에 따른 열람의 요구, 정정, 삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</li>
                                    <li>7) 고객이 개인정보 오류정정을 요구하신 경우, 회사는 오류정정을 완료하기 전까지 당해 개인정보를 이용 · 제공하지 않으며, 이미 제3자에게 당해 개인정보를 제공한 경우에는 제3자에게 지체없이 통지하여 오류 정정이 이루어지도록 하고 있습니다.</li>
                                    <li>8) 고객 또는 법정 대리인이 동의철회(가입해지)한 경우, 회사는 지체없이 파기하는 것을 원칙으로 하나 관계법령에서 의무적으로 보유하도록 한 경우에는 개인정보 처리방침 '개인정보의 보유 및 이용기간'에 따라 처리하고, 반드시 필요한 경우에만 열람 또는 이용이 가능하도록 조치하고 있습니다.</li>
                                </ul>

                                <p className="tit">9. 고객의 권익침해에 대한 구제방법</p>
                                <p className="type_1">
                                    고객께서는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.
                                    아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다

                                    ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
                                    - 소관업무 : 개인정보 침해사실 신고, 상담 신청
                                    - 홈페이지 : privacy.kisa.or.kr
                                    - 전화 : (국번없이) 118
                                    - 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층

                                    ▶ 개인정보 분쟁조정위원회
                                    - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
                                    - 홈페이지 : www.kopico.go.kr
                                    - 전화 : (국번없이) 1833-6972
                                    - 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 12층

                                    ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)
                                    ▶ 경찰청 사이버안전국 : 182 (https://cyberbureau.police.go.kr)
                                </p>

                                <p className="tit">10. 개인정보 보호책임자 및 담당자, 업무처리 부서</p>
                                <ul>
                                    <li>
                                        1) 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 고객의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                                        <table>
                                            <colgroup>
                                                <col style={{width:"50%" }}/>
                                                <col style={{width:"50%" }}/>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th colspan="2">개인정보보호 정책 및 총괄</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        - 개인정보 보호책임자 : 홍석범 상무
                                                        - 소속 : 국내전동화사업실
                                                    </td>
                                                    <td>
                                                        - 개인정보 보호 담당자 : 김동준 매니저
                                                        - 소속 : 국내전동화전략팀
                                                        - 전화번호 : 080-600-6000
                                                        - 이메일 : privacy@hyundai.com
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        2) 고객께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
                                        회사는 고객님의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
                                        ※ 다만 개인정보 보호 관련 문의, 불만 및 피해관련 내용 이외의 내용으로 발송하시는 이메일은 답변 및 처리가 어려우며,
                                        담당자의 동의 없이 발송하는 영리목적의 광고성 이메일에 대해서는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」
                                        제50조부터 제50조의8의 규정에 따라 관계기관에 신고 등의 조치가 이루어 질 수 있습니다.
                                    </li>
                                </ul>

                                <p className="tit">11. 개인정보 처리방침의 변경에 관한 사항</p>
                                <p className="type_1">
                                    회사는 본 개인정보처리방침을 변경하는 경우 그 이유 및 변경내용을 홈페이지 첫 화면의 공지사항란 또는 별도의 창을 통하는 등의 방법으로 사전에 공지한 후 변경 및 적용하고 있습니다.
                                    본 방침은 2021년 05월 10일부터 시행됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPrivacy>
    );
};

export default Privacy;