import React from 'react';
import styled from 'styled-components';
import Category from '@components/Blog/Category';

const RootWrap = styled.div`
  > #root {
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);
    padding: 30px;
    width: 100%;
    display: block;

    #categories {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
      margin: 36px 0 14px 0;
    }

    #title {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
    }

    #subtitle {
      color: #646469;
      font-size: 14px;
      line-heigh: 20px;
      margin-top: 10px;
    }
  }
`;

interface CategorySelectorProps {
  selectedCat: string;
  categories: string[];
  onSelectCat: (cat: string) => void;
}

export default ({
  selectedCat,
  categories,
  onSelectCat
}: CategorySelectorProps) => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="title">About Our Blog</h2>
        <h3 id="subtitle">
          Mauris ornare lacus est, eu efficitur felis faucibus tristique. Nam
          sit amet magna eu nisi gravida convallis.
        </h3>
        <h2 id="categories">Categories</h2>
        {categories.map((cat, i) => (
          <Category
            key={`cat#${i}`}
            cat={cat}
            onClick={() => (selectedCat === cat ? null : onSelectCat(cat))}
          />
        ))}
      </div>
    </RootWrap>
  );
};
