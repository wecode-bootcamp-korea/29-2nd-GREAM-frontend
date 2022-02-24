import React from 'react';
import styled from 'styled-components';
import AUTHORDROP_DATA from './AUTHORDROP_DATA';
const AuthorDrop = ({ handleInput }) => {
  return (
    <FilterName>
      <Cate />
      <SubCate>
        {AUTHORDROP_DATA?.map(({ id, name }) => {
          return (
            <div className="check" key={id}>
              <input
                type="radio"
                name="checkbox"
                value={id}
                onClick={() => {
                  handleInput(id);
                }}
              />
              <p className="category">{name} </p>
            </div>
          );
        })}
      </SubCate>
    </FilterName>
  );
};

const FilterName = styled.div`
  display: block;
`;

const Cate = styled.span`
  display: block;
  margin-bottom: 15px;
`;

const SubCate = styled.span`
  color: ${props => props.theme.greyColor};
  .check {
    display: flex;
  
    }
  }
  .category {
    margin-left: 10px;
  }
`;

export default AuthorDrop;
