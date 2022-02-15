import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetailSlider = ({ product }) => {
  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    infinite: false,
  };

  return (
    <>
      <h2>Single Item</h2>
      <Container>
        <StyledSlider {...settings}>
          {product.img.map((product, idx) => {
            return (
              <div key={idx}>
                <ImageContainer>
                  <Image src={product} alt="제품이미지" />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 560px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-prev {
    left: 0;
    width: 44px;
    z-index: 100;
  }

  .slick-next {
    right: 0;
    width: 44px;
  }

  .slick-prev::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 44 44'%3E%3Cpath stroke='darkgrey' stroke-width='1.5' d='M27.5 33l-11-11 11-11'/%3E%3C/svg%3E");
  }

  .slick-next::before {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 44 44'%3E%3Cpath stroke='darkgrey' stroke-width='1.5' d='M16.5 11l11 11-11 11'/%3E%3C/svg%3E");
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.75;
  }

  .slick-prev:hover,
  .slick-next:hover {
    opacity: 0.75;
  }

  .slick-prev.slick-disabled:hover,
  .slick-next.slick-disabled:hover {
    opacity: 1;
  }

  .slick-dots {
    padding: 0 16px;
    bottom: 12px;
    left: 0;
    right: 0;
    display: table !important;
    width: 100%;
    padding: 0 16px;
  }

  .slick-dots:focus {
    color: darkgray;
  }

  .slick-dots > li {
    display: table-cell;
    vertical-align: top;
    cursor: default;
  }

  .slick-dots > li > button {
    vertical-align: top;
    width: 100%;
    display: inline-block;
    height: 2px;
    padding: 10px;
    cursor: default;
  }

  .slick-dots > li > button:before {
    content: '';
    width: 100%;
    display: inline-block;
    height: 2px;
    background-color: black;
    cursor: pointer;
  }

  .slick-dots > li > button:hover {
    opacity: 0.25;
  }

  .slick-dots > li > button:focus {
    opacity: 0.75;
  }
`;

const ImageContainer = styled.div`
  margin: 0;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default ProductDetailSlider;
