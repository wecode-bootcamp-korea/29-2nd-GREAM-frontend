import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';
import SLIDER_DATAS from './SLIDER_DATAS';

function Sliders() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: function (currentSlide, nextSlide) {
      setCurrentSlide(nextSlide + 1);
    },
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/list');
  };

  return (
    <StyledSlider {...settings}>
      {SLIDER_DATAS.map(data => {
        return (
          <div key={data.id}>
            <Item>
              <Wrap>
                <div className="slideCondition">
                  {currentSlide}/{SLIDER_DATAS.length}
                </div>
                <Image src={data.img} onClick={goHome} />
              </Wrap>
            </Item>
          </div>
        );
      })}
    </StyledSlider>
  );
}
export default Sliders;

const StyledSlider = styled(Slider)`
  position: relative;

  .slick-arrow {
    font-size: 10px;
  }

  .slick-next {
    top: 85%;
    right: 1%;
    z-index: 1;
  }

  .slick-prev {
    top: 85%;
    left: 94%;
    z-index: 1;
  }

  .slideCondition {
    position: absolute;
    top: 80%;
    left: 95.5%;
    font-size: 18px;
    font-weight: 600;
    z-index: 2;
    color: ${props => props.theme.palette.grey};
  }

  .slick-next:before {
    color: ${props => props.theme.palette.grey};
    font-size: ${({ theme }) => theme.fontsize.fontSize1};
  }

  .slick-prev:before {
    color: ${props => props.theme.palette.grey};
    font-size: ${({ theme }) => theme.fontsize.fontSize1};
  }
`;
const Item = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin: 0 auto;
`;

const Wrap = styled.span`
  display: flex;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;
