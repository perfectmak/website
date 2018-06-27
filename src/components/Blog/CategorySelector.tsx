import React from 'react';
import styled from 'styled-components';
import Category from '@components/Blog/Category';

const RootWrap = styled.div`
  > #root {
    margin-top: -24px;
    width: 100%;
    display: block;

    #categories {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
    }
  }
`;

interface CategorySelectorProps {
  selectedCat: string;
  categories: string[];
  onSelectCat: (cat: string) => void;
  deselectCat: () => void;
}

export default ({
  selectedCat,
  categories,
  onSelectCat,
  deselectCat
}: CategorySelectorProps) => {
  return (
    <RootWrap>
      <div id="root">
        <h2 id="categories">Categories</h2>
        {categories.map((cat, i) => (
          <Category
            key={`cat#${i}`}
            cat={cat}
            selectedCat={selectedCat}
            deselectCat={deselectCat}
            onClick={() => (selectedCat === cat ? null : onSelectCat(cat))}
          />
        ))}
      </div>
    </RootWrap>
  );
};
