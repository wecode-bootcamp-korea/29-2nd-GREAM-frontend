import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import SLIDER_DATAS from './SLIDER_DATAS';

function Sliders() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: function (currentSlide, nextSlide) {
      setCurrentSlide(nextSlide + 1);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    },
  };

  return (
    <Slider {...settings}>
      {SLIDER_DATAS.map(data => {
        return (
          <Banner key={data.id}>
            <Item>
              <Wrap>
                <Image src={data.img} />
              </Wrap>
            </Item>
          </Banner>
        );
      })}
    </Slider>
  );
}

const Banner = styled.div`
  .slick-next {
    background-color: blue;
  }
`;

const Item = styled.div`
  display: flex;
  height: 100px;
  margin: 0 auto;
`;

const Wrap = styled.span`
  display: flex;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;

export default Sliders;
