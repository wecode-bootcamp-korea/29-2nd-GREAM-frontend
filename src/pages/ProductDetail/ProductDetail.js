import React, { useEffect, useState } from 'react';
import ProductDetailSlider from './ProductDetailSlider';

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch('/data/product.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductData(data.message));
  }, []);

  return productData === null ? (
    <h4>상품 상세페이지를 로딩중입니다.</h4>
  ) : (
    <ProductDetailSlider product={productData} />
  );
};

export default ProductDetail;
