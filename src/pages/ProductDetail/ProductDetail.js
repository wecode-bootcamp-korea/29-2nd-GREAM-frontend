import React, { useState, useEffect } from 'react';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import ProductDetailSlider from './ProductDetailSlider';

const ProductDetail = () => {
  const [productBox, setProductBox] = useState([]);

  useEffect(() => {
    fetch('/data/Products.json')
      .then(res => res.json())
      .then(data => {
        setProductBox(data);
      });
  }, []);

  return (
    <div>
      <div>
        <ProductDetailInfo
          productBox={productBox}
          setProductBox={setProductBox}
        />
      </div>
      {/* {productData === null ? (
        <h4>상품 상세페이지를 로딩중입니다.</h4>
      ) : (
        <ProductDetailSlider product={productData} />
      )} */}
    </div>
  );
};

export default ProductDetail;
