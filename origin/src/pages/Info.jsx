import React from 'react';
import styled from 'styled-components';

const ContainerInfo = styled.div`
 #container {
  position: relative;

  &::before {
    content: '';
    position: relative;
    width: 100%;
    height: 1056px;
    background: #f6f3f2;
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .inner {
    position: relative;
    width: 1200px;
    color: #fff;
    z-index: 2;
    margin: 0 auto;
  }
}
`
const Info = () => {
    return (
        <ContainerInfo>
            <div id="container">
                <div class="inner">
                    <div class="item"><img src="./img/info/bg_info_1.png" alt="" /></div>
                    <div class="ir">
                        탐라는 전기차
                        전기차의 성지 제주도에서 전기차 렌트 시 필요한 모든 정보를 제공해 드립니다.

                        세계 자연유산으로 지정된 제주는
                        국내에서 가장 쉽고 편하게
                        전기차를 이용해볼 수 있는 것이죠.

                        하지만 막상 전기차를 렌트해서 이용하더라도
                        전기차만의 특성을 모르고 이용하거나 특별한 기능을 사용하지 못한다면
                        즐거운 여행 기간 동안 오히려 예상치 못한 어려움을 만날 수 있습니다.

                        전기차를 이용한 제주도 여행이 더 즐겁고 편안할 수 있도록
                        전기차의 기본 특성부터 운행 팁, 충전 방법, 사고시 대처 방법 등
                        전기차와 관련된 다양한 정보를 제공해드립니다.

                        ‘탐라는 전기차‘에서 준비한 꿀팁들로 전기차에 대해
                        간단하게 알아보며 더욱 더 즐거운 여행을 준비해볼까요?
                    </div>
                </div>
            </div>
        </ContainerInfo>
    );
};

export default Info;